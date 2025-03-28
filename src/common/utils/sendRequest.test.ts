import sendRequest from './sendRequest';

describe('sendRequest', () => {
    let mockFetch: jest.Mock;

    beforeEach(() => {
        mockFetch = jest.fn();
        global.fetch = mockFetch;
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should call fetch with the given arguments and return the response', async () => {
        const mockResponse = new Response('OK', { status: 200 });
        mockFetch.mockResolvedValue(mockResponse);

        const url = 'https://api.example.com/data';
        const options = { method: 'GET' };

        const response = await sendRequest(url, options);

        expect(mockFetch).toHaveBeenCalledWith(url, options);
        expect(response.ok).toBe(true);
        expect(await response.text()).toBe('OK');
    });

    it('should properly handle fetch rejections', async () => {
        mockFetch.mockRejectedValue(new Error('Network Error'));

        const url = 'https://api.example.com/data';
        const options = { method: 'POST' };

        await expect(sendRequest(url, options)).rejects.toThrow('Network Error');
        expect(mockFetch).toHaveBeenCalledWith(url, options);
    });
});
