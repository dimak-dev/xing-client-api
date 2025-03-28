import sendRequest from 'common/utils/sendRequest';
import buildGetTokenQueryParams from './utils/buildGetTokenQueryParams';
import type { XingGetAccessTokenParameters } from './types/XingGetAccessTokenParameters';
import type { XingGetAccessTokenResponse } from './types/XingGetAccessTokenResponse';

/**
 * Retrieves an access token from the Xing API using the provided parameters.
 *
 * @param {XingGetAccessTokenParameters} parameters - An object containing the necessary parameters to fetch
 *      the access token.
 * @param {string} parameters.client_id - The client ID issued when the application was registered.
 * @param {string} parameters.client_secret - The client secret issued when the application was registered.
 * @param {string} parameters.redirect_uri - The redirect URI matching the one used during the authorization request.
 * @param {string} parameters.code - The authorization code received from the authorization server.
 *
 * @return {Promise<XingGetAccessTokenResponse>} A promise that resolves with the access token response.
 *
 * @example
 * // Using .then() and .catch()
 * const parameters: XingGetAccessTokenParameters = {
 *   client_id: 'your-client-id',
 *   client_secret: 'your-client-secret',
 *   redirect_uri: 'https://example.com/callback',
 *   code: 'authorization-code',
 * };
 *
 * getAccessToken(parameters)
 *   .then(response => {
 *     console.log('Access token:', response.access_token);
 *     console.log('Refresh token:', response.refresh_token);
 *   })
 *   .catch(error => {
 *     console.error('Error fetching access token:', error);
 *   });
 *
 * @example
 * // Using async/await
 * async function fetchAccessToken() {
 *   try {
 *     const parameters: XingGetAccessTokenParameters = {
 *       client_id: 'your-client-id',
 *       client_secret: 'your-client-secret',
 *       redirect_uri: 'https://example.com/callback',
 *       code: 'authorization-code',
 *     };
 *     const response = await getAccessToken(parameters);
 *     console.log('Access token:', response.access_token);
 *     console.log('Refresh token:', response.refresh_token);
 *   } catch (error) {
 *     console.error('Error fetching access token:', error);
 *   }
 * }
 */
export async function getAccessToken(parameters: XingGetAccessTokenParameters): Promise<XingGetAccessTokenResponse> {
    const url = 'https://api.xing.com/auth/oauth2/token';
    const queryParams = buildGetTokenQueryParams(parameters);

    const response = await sendRequest(`${url}?${queryParams}`, { method: 'POST' });

    return response.json();
}
