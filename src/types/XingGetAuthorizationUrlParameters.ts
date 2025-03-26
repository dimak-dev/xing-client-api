/**
 * Parameters required to build the XING OAuth 2.0 authorization URL.
 */
export interface XingGetAuthorizationUrlParameters {
    /**
     * The client ID obtained during app registration.
     * @example "your-client-id"
     */
    clientId: string;

    /**
     * The URL to which the user will be redirected after authorization.
     * Must match the URL registered with the application.
     * @example "https://your-redirect-uri.com/callback"
     */
    redirectUri: string;

    /**
     * An optional parameter for maintaining state between the request and the callback.
     * Can be used to prevent CSRF attacks or to recall user-specific information.
     * @example "random-state-value"
     */
    state?: string;
}
