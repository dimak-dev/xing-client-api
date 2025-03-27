import type { XingGetAccessTokenParameters } from '../types/XingGetAccessTokenParameters';

/**
 * Builds the query parameters string for getting an authorization token.
 *
 * @param {XingGetAccessTokenParameters} params - The parameters required for obtaining the token.
 * @return {string} The URL-encoded query string constructed from the provided parameters.
 */
export default function buildGetTokenQueryParams(params: XingGetAccessTokenParameters): string {
    return new URLSearchParams({
        client_id: params.client_id,
        client_secret: params.client_secret,
        redirect_uri: params.redirect_uri,
        code: params.code,
        grant_type: 'authorization_code',
    }).toString();
}
