type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

function getRequest(
    method: Method,
    data: unknown,
) : RequestInit{
    if (method === 'GET') {
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            }
        }
    }

    return {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    }
}

export async function sendApiRequest<T>(
    url: string,
    method: Method,
    data: unknown = {}
): Promise<T> {
    console.log(`Sending ${method} request to ${url} with data:`, data);

    const response = await fetch(url, getRequest(method, data));

    if (!response.ok) {
        const message = `An error occurred: ${response.status} - ${response.statusText}`;
        console.error(message);
        throw new Error(message);
    }

    const result = await response.json();
    console.log("Response received:", result);
    return result;
}
