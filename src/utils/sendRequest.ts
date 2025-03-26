/**
 * Sends a network request using the fetch API with the provided arguments.
 *
 * @param {...Parameters<typeof fetch>} args - The arguments to be passed directly to the fetch API.
 * @return {ReturnType<typeof fetch>} A Promise that resolves to the response of the fetch request.
 */
export default function sendRequest(...args: Parameters<typeof fetch>): ReturnType<typeof fetch> {
    return fetch(...args);
}
