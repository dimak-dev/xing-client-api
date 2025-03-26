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
     * The client ID provided by Xing.
     * @example "your-client-id"
     */
    clientId: string;

    /**
     * The client secret corresponding to the client ID.
     * @example "your-client-secret"
     */
    clientSecret: string;

    /**
     * The refresh token issued by Xing, used to obtain a new access token.
     * @example "your-refresh-token"
     */
    refreshToken: string;
}
