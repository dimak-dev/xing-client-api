import sendRequest from 'common/utils/sendRequest';

/**
 * Abstract class that provides a base for working with the Xing API.
 *
 * This class handles API authentication and provides utility methods for sending authorized HTTP requests
 * to API endpoints.
 */
export default abstract class XingBaseApiClient {
    /**
     * Access token.
     */
    private readonly accessToken: string;

    /**
     * Constructor for initializing an instance with the given access token.
     *
     * @param {string} accessToken - The access token used for authentication or API requests.
     */
    public constructor(accessToken: string) {
        this.accessToken = accessToken;
    }

    /**
     * Sends an authorized HTTP request to the specified API endpoint with the given parameters,
     * method, and optional request body. It handles authorization headers and request formatting.
     *
     * @param {string} path - The path for the API endpoint.
     * @param {Record<string, string>} [params={}] - The query parameters to include in the request URL.
     * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} [method='GET'] - The HTTP method to use for the request.
     * @param {unknown} [body] - The payload to include in the request body (used for POST or PUT methods).
     *
     * @return {Promise<T>} - A promise that resolves to the parsed response body as the generic type T,
     *                        or a boolean for PUT or DELETE methods with no content.
     */
    protected async sendAuthorizedRequest<T>(
        path: string,
        params: Record<string, string> = {},
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
        body?: unknown,
    ): Promise<T> {
        const url = `https://api.xing.com${path}?${new URLSearchParams(params).toString()}`;

        const requestInit: RequestInit = {
            method,
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        if ((method === 'POST' || method === 'PUT') && body) {
            requestInit.body = JSON.stringify(body);
        }

        const response = await sendRequest(url, requestInit);

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status} ${response.statusText}`);
        }

        if ((method === 'PUT' || method === 'DELETE') && response.status === 204) {
            return true as T;
        }

        return response.json();
    }
}
