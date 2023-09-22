export default async function getAllUsers() {

    const res = await fetch(process.env.JSON_PLACEHOLDER_ENDPOINT + '/users');

    if (!res.ok) throw new Error(res.statusText);
    return res.json();
}
