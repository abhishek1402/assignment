
const apiUrl = 'http://localhost:8080/api'
export const get = async (endpoint) => {
    return await (
        await fetch(`${apiUrl}/${endpoint}`)
    ).json();
}

export const put = async (endpoint, body) => {
    try {
        const data = await fetch(`${apiUrl}/${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        return data
    }
    catch (e) {
        console.log(e);
    }
}