import type { XingGetAuthorizationUrlParameters } from './types/XingGetAuthorizationUrlParameters';
import { getAuthorizationUrl } from './getAuthorizationUrl';

describe('getAuthorizationUrl', () => {
    it('should generate the correct URL with required parameters', () => {
        const params: XingGetAuthorizationUrlParameters = {
            client_id: 'test-client-id',
            redirect_uri: 'https://test-redirect-uri.com/callback',
        };

        const result = getAuthorizationUrl(params);

        expect(result)
            .toBe(
                'https://api.xing.com/auth/oauth2/authorize?'
                + 'client_id=test-client-id'
                + '&redirect_uri=https%3A%2F%2Ftest-redirect-uri.com%2Fcallback',
            );
    });

    it('should include the optional state parameter if provided', () => {
        const params: XingGetAuthorizationUrlParameters = {
            client_id: 'test-client-id',
            redirect_uri: 'https://test-redirect-uri.com/callback',
            state: 'random-state-value',
        };

        const result = getAuthorizationUrl(params);

        expect(result)
            .toBe(
                'https://api.xing.com/auth/oauth2/authorize?'
                + 'client_id=test-client-id'
                + '&redirect_uri=https%3A%2F%2Ftest-redirect-uri.com%2Fcallback'
                + '&state=random-state-value',
            );
    });

    it('should encode special characters in the redirectUri and state parameters', () => {
        const params: XingGetAuthorizationUrlParameters = {
            client_id: 'test-client-id',
            redirect_uri: 'https://test-redirect-uri.com/callback?query=value&other=value',
            state: 'state-with-special@characters!',
        };

        const result = getAuthorizationUrl(params);

        expect(result)
            .toBe(
                'https://api.xing.com/auth/oauth2/authorize?'
                + 'client_id=test-client-id'
                + '&redirect_uri=https%3A%2F%2Ftest-redirect-uri.com%2Fcallback%3Fquery%3Dvalue%26other%3Dvalue'
                + '&state=state-with-special%40characters%21',
            );
    });
});
