
const apiUrl = 'http://localhost:8080/api'
export const get = async (endpoint) => {
    return await (
        await fetch(`${apiUrl}/${endpoint}`)
    ).json();
}