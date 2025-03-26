import { XingGetAccessTokenParameters } from 'types/XingGetAccessTokenParameters';
import buildGetTokenQueryParams from './buildGetTokenQueryParams';

describe('buildGetTokenQueryParams', () => {
    it('should build query parameters correctly with valid input', () => {
        const params: XingGetAccessTokenParameters = {
            clientId: 'test-client-id',
            clientSecret: 'test-client-secret',
            redirectUri: 'https://example.com/callback',
            code: 'test-authorization-code',
        };

        const result = buildGetTokenQueryParams(params);

        expect(result).toBe(
            'client_id=test-client-id'
            + '&client_secret=test-client-secret'
            + '&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback'
            + '&code=test-authorization-code'
            + '&grant_type=authorization_code',
        );
    });

    it('should encode special characters in the query parameters', () => {
        const params: XingGetAccessTokenParameters = {
            clientId: 'test client id',
            clientSecret: 'test+client/secret',
            redirectUri: 'https://example.com/call?back',
            code: 'test=code&value',
        };

        const result = buildGetTokenQueryParams(params);

        expect(result).toBe(
            'client_id=test+client+id'
            + '&client_secret=test%2Bclient%2Fsecret'
            + '&redirect_uri=https%3A%2F%2Fexample.com%2Fcall%3Fback'
            + '&code=test%3Dcode%26value'
            + '&grant_type=authorization_code',
        );
    });
});
