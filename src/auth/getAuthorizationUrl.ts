import type { XingGetAuthorizationUrlParameters } from 'types/XingGetAuthorizationUrlParameters';

/**
 * Generates the URL for initiating the Authorization Code grant type flow.
 * This URL should be used to redirect the user's browser to XING's OAuth 2.0 authorization endpoint.
 *
 * Once the user successfully authorizes the application, they will be redirected to the provided `redirectUri`.
 * The optional `state` parameter can be used to maintain state between the request and the callback.
 *
 * Note: Although the OAuth 2 specification supports a `scope` parameter, XING OAuth 2 does not use it.
 *
 * @param {XingGetAuthorizationUrlParameters} parameters - Parameters required to build the authorization URL.
 * @param {string} parameters.client_id - The client ID obtained during app registration.
 * @param {string} parameters.redirect_uri - The URL to which the user will be redirected after authorization.
 * @param {string} [parameters.state] - An optional string to maintain state between the flow and callback.
 *
 * @returns {string} The generated authorization URL.
 *
 * @example
 * // Example 1: Basic usage
 * const url = getAuthorizationUrl({
 *     client_id: "your-client-id",
 *     redirect_uri: "https://your-redirect-uri.com/callback"
 * });
 * console.log(url);
 *
 * @example
 * // Example 2: Providing state
 * const url = getAuthorizationUrl({
 *     client_id: "your-client-id",
 *     redirect_uri: "https://your-redirect-uri.com/callback",
 *     state: "random-state-value"
 * });
 * console.log(url);
 */
export function getAuthorizationUrl(parameters: XingGetAuthorizationUrlParameters): string {
    const url = new URL('https://api.xing.com/auth/oauth2/authorize');
    url.searchParams.append('client_id', parameters.client_id);
    url.searchParams.append('redirect_uri', parameters.redirect_uri);
    if (parameters.state) url.searchParams.append('state', parameters.state);

    return url.toString();
}
