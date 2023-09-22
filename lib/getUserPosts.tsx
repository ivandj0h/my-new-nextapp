export default async function getUserPosts(userId: string) {

    const res = await fetch(`${process.env.JSON_PLACEHOLDER_ENDPOINT}/posts?userId=${userId}`);
    if (!res.ok) throw new Error(res.statusText);

    return res.json();
}
