import type { XingRefreshAccessTokenParameters } from 'types/XingRefreshAccessTokenParameters';

import buildRefreshTokenQueryParams from './buildRefreshTokenQueryParams';

describe('buildRefreshTokenQueryParams', () => {
    it('should build a correctly formatted query string with valid parameters', () => {
        const params: XingRefreshAccessTokenParameters = {
            clientId: 'test-client-id',
            clientSecret: 'test-client-secret',
            refreshToken: 'test-refresh-token',
        };

        const result = buildRefreshTokenQueryParams(params);

        expect(result)
            .toBe(
                'client_id=test-client-id'
                + '&client_secret=test-client-secret'
                + '&refresh_token=test-refresh-token'
                + '&grant_type=refresh_token',
            );
    });

    it('should handle parameters with special characters correctly', () => {
        const params: XingRefreshAccessTokenParameters = {
            clientId: 'test-client-id',
            clientSecret: 'test-client-secret&secret=value',
            refreshToken: 'test-refresh-token=value#',
        };

        const result = buildRefreshTokenQueryParams(params);

        expect(result)
            .toBe(
                'client_id=test-client-id'
                + '&client_secret=test-client-secret%26secret%3Dvalue'
                + '&refresh_token=test-refresh-token%3Dvalue%23'
                + '&grant_type=refresh_token',
            );
    });
});
