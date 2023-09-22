export default async function getUser(userId: string) {

    const res = await fetch(`${process.env.JSON_PLACEHOLDER_ENDPOINT}/users/${userId}`);
    if (!res.ok) throw new Error(res.statusText);

    return res.json();
}
