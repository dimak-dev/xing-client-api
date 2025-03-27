/**
 * Parameters required to refresh an access token.
 *
 * @example
 * const params: RefreshAccessTokenParameters = {
 *   clientId: "your-client-id",
 *   clientSecret: "your-client-secret",
 *   refreshToken: "your-refresh-token"
 * };
 */
export interface XingRefreshAccessTokenParameters {
    /**
     * The client ID provided by Xing during application registration.
     * @example "your-client-id"
     */
    client_id: string;

    /**
     * The client secret obtained during application registration, corresponding to the client ID.
     * @example "your-client-secret"
     */
    client_secret: string;

    /**
     * The refresh token issued by Xing, used to obtain a new access token.
     * @example "your-refresh-token"
     */
    refresh_token: string;
}
