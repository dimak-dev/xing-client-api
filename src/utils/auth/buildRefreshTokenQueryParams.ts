import type { XingRefreshAccessTokenParameters } from 'types/XingRefreshAccessTokenParameters';

/**
 * Builds the query parameters string for getting an authorization token.
 *
 * @param {XingRefreshAccessTokenParameters} params - The parameters required for obtaining the token.
 * @return {string} The URL-encoded query string constructed from the provided parameters.
 */
export default function buildRefreshTokenQueryParams(params: XingRefreshAccessTokenParameters): string {
    return new URLSearchParams({
        client_id: params.client_id,
        client_secret: params.client_secret,
        refresh_token: params.refresh_token,
        grant_type: 'refresh_token',
    }).toString();
}
