/**
 * Parameters required to obtain an access token from Xing.
 *
 * @example
 * const params: XingGetTokenParameters = {
 *   clientId: "your-client-id",
 *   clientSecret: "your-client-secret",
 *   redirectUri: "https://example.com/callback",
 *   code: "authorization-code"
 * };
 */
export interface XingGetAccessTokenParameters {
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
     * The redirect URI used during authorization.
     * Must match the one registered in Xing.
     * @example "https://example.com/callback"
     */
    redirectUri: string;

    /**
     * The authorization code received after the user grants permission.
     * @example "authorization-code"
     */
    code: string;
}
