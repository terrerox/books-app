export const BASE_URL = 'https://fakerestapi.azurewebsites.net/api/v1'

export const FETCH_OPTIONS = {
    POST: (body) => {
        return {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        }
    },
    PUT: (body) => {
        return {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        }
    },
    DELETE: () => {
        return {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            }
        }
    }
}

export const truncateText = (text) => {
    const MAX_LENGTH = 140;
    return text.substring(0, MAX_LENGTH) + '...';
}


export const httpClient = (endpoint, options) => {
    const url = BASE_URL + endpoint
    return fetch(url, options)
}