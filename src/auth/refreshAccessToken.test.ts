import type { XingRefreshAccessTokenParameters } from 'types/XingRefreshAccessTokenParameters';
import type { XingRefreshAccessTokenResponse } from 'types/XingRefreshAccessTokenResponse';

import sendRequest from 'utils/sendRequest';
import buildRefreshTokenQueryParams from 'utils/auth/buildRefreshTokenQueryParams';

import { refreshAccessToken } from './refreshAccessToken';

jest.mock('utils/sendRequest');
jest.mock('utils/auth/buildRefreshTokenQueryParams');

describe('refreshAccessToken', () => {
    const mockSendRequest = jest.mocked(sendRequest, { shallow: true });
    const mockBuildRefreshTokenQueryParams = jest.mocked(buildRefreshTokenQueryParams, { shallow: true });

    const mockParameters: XingRefreshAccessTokenParameters = {
        client_id: 'mock-client-id',
        client_secret: 'mock-client-secret',
        refresh_token: 'mock-refresh-token',
    };

    const mockResponse: XingRefreshAccessTokenResponse = {
        access_token: 'mock-access-token',
        refresh_token: 'mock-refresh-token',
        expires_in: 3600,
        token_type: 'bearer',
        user_id: '12345678',
    };

    beforeEach(() => {
        const response = {
            json: jest.fn().mockResolvedValue(mockResponse),
        } as unknown as Response;
        mockSendRequest.mockResolvedValue(response);
        mockBuildRefreshTokenQueryParams.mockReturnValue('mocked_query_params');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should retrieve an access token successfully', async () => {
        const result = await refreshAccessToken(mockParameters);

        expect(mockBuildRefreshTokenQueryParams)
            .toHaveBeenCalledWith({
                clientId: 'mock-client-id',
                clientSecret: 'mock-client-secret',
                refreshToken: 'mock-refresh-token',
            });
        expect(mockSendRequest)
            .toHaveBeenCalledWith(
                'https://api.xing.com/auth/oauth2/token?mocked_query_params',
                { method: 'POST' },
            );
        expect(result)
            .toEqual(mockResponse);
    });

    it('should throw an error if the request fails', async () => {
        mockSendRequest.mockRejectedValueOnce(new Error('Request failed'));

        await expect(refreshAccessToken(mockParameters))
            .rejects
            .toThrow('Request failed');
        expect(mockBuildRefreshTokenQueryParams)
            .toHaveBeenCalledWith({
                clientId: 'mock-client-id',
                clientSecret: 'mock-client-secret',
                refreshToken: 'mock-refresh-token',
            });
        expect(mockSendRequest)
            .toHaveBeenCalledWith(
                'https://api.xing.com/auth/oauth2/token?mocked_query_params',
                { method: 'POST' },
            );
    });
});
