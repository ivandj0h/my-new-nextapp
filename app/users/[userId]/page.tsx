import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";


type Params = {
    params: {
        userId: string
    }
}

export default async function userPage({params: {userId}}: Params) {
const userData: Promise<User> = getUser(userId);
const userPostsData: Promise<Post[]> = getUserPosts(userId);

    return (
        <></>
    );
}
