import sendRequest from 'utils/sendRequest';
import buildGetTokenQueryParams from './utils/buildGetTokenQueryParams';
import type { XingGetAccessTokenParameters } from './types/XingGetAccessTokenParameters';
import type { XingGetAccessTokenResponse } from './types/XingGetAccessTokenResponse';

import { getAccessToken } from './getAccessToken';

jest.mock('utils/sendRequest');
jest.mock('./utils/buildGetTokenQueryParams');

describe('getAccessToken', () => {
    const mockSendRequest = jest.mocked(sendRequest, { shallow: true });
    const mockBuildGetTokenQueryParams = jest.mocked(buildGetTokenQueryParams, { shallow: true });

    const mockParameters: XingGetAccessTokenParameters = {
        client_id: 'mock-client-id',
        client_secret: 'mock-client-secret',
        redirect_uri: 'https://example.com/callback',
        code: 'mock-code',
    };

    const mockResponse: XingGetAccessTokenResponse = {
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
        mockBuildGetTokenQueryParams.mockReturnValue('mocked_query_params');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should retrieve an access token successfully', async () => {
        const result = await getAccessToken(mockParameters);

        expect(mockBuildGetTokenQueryParams)
            .toHaveBeenCalledWith({
                client_id: 'mock-client-id',
                client_secret: 'mock-client-secret',
                redirect_uri: 'https://example.com/callback',
                code: 'mock-code',
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

        await expect(getAccessToken(mockParameters))
            .rejects
            .toThrow('Request failed');
        expect(mockBuildGetTokenQueryParams)
            .toHaveBeenCalledWith({
                client_id: 'mock-client-id',
                client_secret: 'mock-client-secret',
                redirect_uri: 'https://example.com/callback',
                code: 'mock-code',
            });
        expect(mockSendRequest)
            .toHaveBeenCalledWith(
                'https://api.xing.com/auth/oauth2/token?mocked_query_params',
                { method: 'POST' },
            );
    });
});
