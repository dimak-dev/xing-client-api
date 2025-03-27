import sendRequest from 'utils/sendRequest';
import buildRefreshTokenQueryParams from './utils/buildRefreshTokenQueryParams';
import type { XingRefreshAccessTokenResponse } from './types/XingRefreshAccessTokenResponse';
import type { XingRefreshAccessTokenParameters } from './types/XingRefreshAccessTokenParameters';

/**
 * Refreshes an access token from the Xing API using the provided parameters.
 *
 * @param {XingRefreshAccessTokenParameters} parameters - An object containing the necessary parameters to refresh
 *      the access token.
 * @param {string} parameters.client_id - The client ID issued when the application was registered.
 * @param {string} parameters.client_secret - The client secret issued when the application was registered.
 * @param {string} parameters.refresh_token - The refresh token issued by Xing, used to obtain a new access token.
 *
 * @return {Promise<XingRefreshAccessTokenResponse>} A promise that resolves with the refreshed access token response.
 *
 * @example
 * // Using .then() and .catch()
 * const parameters: XingRefreshAccessTokenParameters = {
 *   client_id: 'your-client-id',
 *   client_secret: 'your-client-secret',
 *   refresh_token: 'your-refresh-token',
 * };
 *
 * refreshAccessToken(parameters)
 *   .then(response => {
 *     console.log('Access token:', response.access_token);
 *     console.log('Refresh token:', response.refresh_token);
 *   })
 *   .catch(error => {
 *     console.error('Error refreshing access token:', error);
 *   });
 *
 * @example
 * // Using async/await
 * async function updateAccessToken() {
 *   try {
 *     const parameters: XingRefreshAccessTokenParameters = {
 *       client_id: 'your-client-id',
 *       client_secret: 'your-client-secret',
 *       refresh_token: 'your-refresh-token',
 *     };
 *     const response = await refreshAccessToken(parameters);
 *     console.log('Access token:', response.access_token);
 *     console.log('Refresh token:', response.refresh_token);
 *   } catch (error) {
 *     console.error('Error refreshing access token:', error);
 *   }
 * }
 */
export async function refreshAccessToken(
    parameters: XingRefreshAccessTokenParameters,
): Promise<XingRefreshAccessTokenResponse> {
    const url = 'https://api.xing.com/auth/oauth2/token';
    const queryParams = buildRefreshTokenQueryParams(parameters);

    const response = await sendRequest(`${url}?${queryParams}`, { method: 'POST' });

    return response.json();
}
