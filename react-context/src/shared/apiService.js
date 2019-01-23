export const get = (url) => {

    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    }

    return fetch(url, options)
        .then(res => res.json())
}

export const post = (url, data) => {

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    }

    return fetch(url, options)
        .then(res => res.json())
}
