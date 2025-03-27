/**
 * The response received after obtaining an access token from Xing.
 *
 * @example
 * const response: XingGetTokenResponse = {
 *   access_token: "abcd1234efgh5678ijkl",
 *   refresh_token: "mnop1234qrst5678uvwx",
 *   expires_in: 3600,
 *   token_type: "bearer",
 *   user_id: "12345678"
 * };
 */
export interface XingGetAccessTokenResponse {
    /**
     * The access token issued by Xing.
     * @example "abcd1234efgh5678ijkl"
     */
    access_token: string;

    /**
     * The refresh token used to obtain a new access token.
     * @example "mnop1234qrst5678uvwx"
     */
    refresh_token: string;

    /**
     * The duration in seconds for which the access token is valid.
     * @example 3600
     */
    expires_in: number;

    /**
     * The type of token issued (always "bearer").
     * @example "bearer"
     */
    token_type: string;

    /**
     * The user ID associated with the access token.
     * @example "12345678"
     */
    user_id: string;
}
