import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import {Suspense} from "react";
import UserPosts from "@/app/users/[userId]/components/UserPosts";
import {Metadata} from "next";


type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata(
    {
        params: {userId}
    }: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId);
    const user = await userData;
    return {
        title: user.name,
        description: user.email
    }
}

export default async function userPage({params: {userId}}: Params) {
    const userData: Promise<User> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPosts(userId);

    // const [user, userPosts] = await Promise.all([userData, userPostsData]);

    const user = await userData;
    return (
        <>
            <h1>{user.name}</h1>
            <br/>
            <Suspense fallback={<div>Loading...</div>}>
                <UserPosts promise={userPostsData}/>
            </Suspense>
        </>
    );


}
