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
     * The client ID obtained during application registration.
     * @example "your-client-id"
     */
    client_id: string;

    /**
     * The client secret obtained during application registration, corresponding to the client ID.
     * @example "your-client-secret"
     */
    client_secret: string;

    /**
     * The redirect URI used during authorization.
     * Must match the one registered in Xing.
     * @example "https://example.com/callback"
     */
    redirect_uri: string;

    /**
     * The authorization code received after the user grants permission.
     * @example "authorization-code"
     */
    code: string;
}
