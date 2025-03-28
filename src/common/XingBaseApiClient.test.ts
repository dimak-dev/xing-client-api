import sendRequest from 'common/utils/sendRequest';
import XingBaseApiClient from './XingBaseApiClient';
import mocked = jest.mocked;

class TestXingApiClient extends XingBaseApiClient {
    public async testSendRequest<T>(
        path: string,
        params: Record<string, string> = {},
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
        body?: unknown,
    ): Promise<T> {
        return this.sendAuthorizedRequest<T>(path, params, method, body);
    }
}

jest.mock('common/utils/sendRequest');

describe('XingBaseApiClient', () => {
    let apiClient: TestXingApiClient;
    const mockSendRequest = mocked(sendRequest, { shallow: true });

    beforeEach(() => {
        apiClient = new TestXingApiClient('fake-access-token');
        mockSendRequest.mockImplementation(async () => new Response('"OK"', { status: 200 }));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should set the correct URL', async () => {
        await apiClient.testSendRequest('/path');

        expect(mockSendRequest)
            .toHaveBeenCalledWith('https://api.xing.com/path?', expect.anything());
    });

    it('should set the correct URL with query parameters', async () => {
        await apiClient.testSendRequest('/path', { query: 'value' });

        expect(mockSendRequest)
            .toHaveBeenCalledWith('https://api.xing.com/path?query=value', expect.anything());
    });

    it('should set the Authorization header', async () => {
        await apiClient.testSendRequest('/');

        expect(mockSendRequest)
            .toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ headers: expect.objectContaining({ Authorization: 'Bearer fake-access-token' }) }));
    });

    it('should set the Content-Type header', async () => {
        await apiClient.testSendRequest('/');

        expect(mockSendRequest)
            .toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ headers: expect.objectContaining({ 'Content-Type': 'application/json' }) }));
    });

    it('should set a default HTTP method', async () => {
        await apiClient.testSendRequest('/');

        expect(mockSendRequest)
            .toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ method: 'GET' }));
    });

    it('should set the correct HTTP method', async () => {
        await apiClient.testSendRequest('/', {}, 'GET');
        await apiClient.testSendRequest('/', {}, 'POST');
        await apiClient.testSendRequest('/', {}, 'PUT');
        await apiClient.testSendRequest('/', {}, 'DELETE');

        expect(mockSendRequest)
            .toHaveBeenNthCalledWith(1, expect.anything(), expect.objectContaining({ method: 'GET' }));
        expect(mockSendRequest)
            .toHaveBeenNthCalledWith(2, expect.anything(), expect.objectContaining({ method: 'POST' }));
        expect(mockSendRequest)
            .toHaveBeenNthCalledWith(3, expect.anything(), expect.objectContaining({ method: 'PUT' }));
        expect(mockSendRequest)
            .toHaveBeenNthCalledWith(4, expect.anything(), expect.objectContaining({ method: 'DELETE' }));
    });

    it('should set the correct HTTP method with body for POST and PUT', async () => {
        await apiClient.testSendRequest('/', {}, 'POST', { body: 'post' });
        await apiClient.testSendRequest('/', {}, 'PUT', { body: 'put' });

        expect(mockSendRequest)
            .toHaveBeenNthCalledWith(1, expect.anything(), expect.objectContaining({ body: '{"body":"post"}' }));
        expect(mockSendRequest)
            .toHaveBeenNthCalledWith(2, expect.anything(), expect.objectContaining({ body: '{"body":"put"}' }));
    });

    it('should handle failed requests by throwing a common error', async () => {
        const mockedResponse = new Response('Not Found', { status: 404, statusText: 'Not Found' });
        const mockJson = jest.spyOn(mockedResponse, 'json');

        mockSendRequest.mockResolvedValueOnce(mockedResponse);

        await expect(apiClient.testSendRequest('/invalid-path'))
            .rejects
            .toThrow(
                'Request failed: 404 Not Found',
            );
        expect(mockJson)
            .not
            .toHaveBeenCalled();
    });

    it('should return true for successful requests with methods PUT and DELETE without reading response', async () => {
        const mockedResponse = new Response(null, { status: 204 });
        const mockJson = jest.spyOn(mockedResponse, 'json');

        mockSendRequest.mockResolvedValueOnce(mockedResponse);

        const response = await apiClient.testSendRequest('/test-path', {}, 'PUT');

        expect(response)
            .toBe(true);
        expect(mockJson)
            .not
            .toHaveBeenCalled();
    });

    it('should send a request and return parsed response', async () => {
        const mockedResponse = new Response('{"key":"value"}', { status: 200 });
        const mockJson = jest.spyOn(mockedResponse, 'json');

        mockSendRequest.mockResolvedValueOnce(mockedResponse);

        const response = await apiClient.testSendRequest('/test-path', { query: 'value' });

        expect(mockJson)
            .toHaveBeenCalledTimes(1);
        expect(response)
            .toEqual({ key: 'value' });
    });
});
