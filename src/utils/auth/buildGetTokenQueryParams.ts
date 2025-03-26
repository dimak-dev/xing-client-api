import type { XingGetAccessTokenParameters } from 'types/XingGetAccessTokenParameters';

/**
 * Builds the query parameters string for getting an authorization token.
 *
 * @param {XingGetAccessTokenParameters} params - The parameters required for obtaining the token.
 * @return {string} The URL-encoded query string constructed from the provided parameters.
 */
export default function buildGetTokenQueryParams(params: XingGetAccessTokenParameters): string {
    return new URLSearchParams({
        client_id: params.clientId,
        client_secret: params.clientSecret,
        redirect_uri: params.redirectUri,
        code: params.code,
        grant_type: 'authorization_code',
    }).toString();
}
