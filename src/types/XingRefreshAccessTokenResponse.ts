import type { XingGetAccessTokenResponse } from 'types/XingGetAccessTokenResponse';

/**
 * Interface representing the response received after refreshing an access token.
 * Extends the XingGetAccessTokenResponse interface to inherit properties and methods
 * that are relevant for access token operations.
 *
 * @example
 * const response: XingRefreshAccessTokenResponse = {
 *   access_token: "newAccessToken12345",
 *   refresh_token: "newRefreshToken67890",
 *   expires_in: 3600,
 *   token_type: "bearer",
 *   user_id: "12345678"
 * };
 */
export interface XingRefreshAccessTokenResponse extends XingGetAccessTokenResponse {
}
