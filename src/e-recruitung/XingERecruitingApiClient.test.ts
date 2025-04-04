import { XingERecruitingApiClient } from './XingERecruitingApiClient';
import type { XingERecruitingPaginatedResponse } from './types/XingERecruitingPaginatedResponse';
import type { XingOrder } from './types/XingOrder';
import { EXingOrderStatus } from './types/EXingOrderStatus';
import type { XingPosting } from './types/XingPosting';

describe('XingERecruitingApiClient', () => {
    let client: XingERecruitingApiClient;
    let mockSendAuthorizedRequest: jest.SpyInstance;

    beforeEach(() => {
        client = new XingERecruitingApiClient('mockAccessToken');
        mockSendAuthorizedRequest = jest.spyOn(client as any, 'sendAuthorizedRequest')
            .mockResolvedValue(null);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('retrieving orders', () => {
        it('should call the API with the correct URL', async () => {
            await client.getOrders();

            expect(mockSendAuthorizedRequest)
                .toHaveBeenCalledWith('/vendor/jobs/orders', expect.anything());
        });

        it('should call the API with provided IDs', async () => {
            await client.getOrders({ ids: [123] });

            expect(mockSendAuthorizedRequest)
                .toHaveBeenCalledWith(expect.any(String), { ids: '123' });

            await client.getOrders({ ids: [123, 456] });

            expect(mockSendAuthorizedRequest)
                .toHaveBeenCalledWith(expect.any(String), { ids: '123,456' });
        });

        it('should call the API with provided status filter', async () => {
            await client.getOrders({ status: EXingOrderStatus.ACTIVE });

            expect(mockSendAuthorizedRequest)
                .toHaveBeenCalledWith(expect.any(String), { status: 'active' });
        });

        it('should call the API with provided pagination parameter', async () => {
            await client.getOrders({ page: 2 });

            expect(mockSendAuthorizedRequest)
                .toHaveBeenCalledWith(expect.any(String), { page: '2' });
        });

        it('should return paginated orders response when called without parameters', async () => {
            const mockResponse: XingERecruitingPaginatedResponse<XingOrder> = {
                total: 1,
                current_page: 1,
                total_pages: 1,
                collection: [{
                    order_id: 1,
                    organization_id: 617,
                    kind: 'Campus',
                    posting_amount_total: 2,
                    posting_amount_used: 1,
                    posting_duration: 90,
                    start_date: '2016-05-16',
                    end_date: '2016-11-17',
                    status: EXingOrderStatus.ACTIVE,
                }],
            };
            mockSendAuthorizedRequest.mockResolvedValueOnce(mockResponse);

            const result = await client.getOrders();

            expect(result)
                .toEqual(mockResponse);
            expect(mockSendAuthorizedRequest)
                .toHaveBeenCalledWith('/vendor/jobs/orders', {});
        });

        it('should handle errors gracefully when the API request fails', async () => {
            mockSendAuthorizedRequest.mockRejectedValueOnce(new Error('Request failed'));

            await expect(client.getOrders())
                .rejects
                .toThrow('Request failed');
        });
    });

    describe('retrieving postings', () => {
        it('should call the API with the correct URL', async () => {
            await client.getPostings();

            expect(mockSendAuthorizedRequest)
                .toHaveBeenCalledWith('/vendor/jobs/postings', {});
        });

        it('should call the API with provided IDs', async () => {
            await client.getPostings({ ids: [123] });

            expect(mockSendAuthorizedRequest)
                .toHaveBeenCalledWith(expect.any(String), { ids: '123' });

            await client.getPostings({ ids: [123, 456] });

            expect(mockSendAuthorizedRequest)
                .toHaveBeenCalledWith(expect.any(String), { ids: '123,456' });
        });

        it('should call the API with provided pagination parameter', async () => {
            await client.getPostings({ page: 2 });

            expect(mockSendAuthorizedRequest)
                .toHaveBeenCalledWith(expect.any(String), { page: '2' });
        });

        it('should return paginated postings response when called without parameters', async () => {
            const mockResponse: XingERecruitingPaginatedResponse<unknown> = {
                total: 1,
                current_page: 1,
                total_pages: 1,
                collection: [{
                    id: 1,
                }],
            };
            mockSendAuthorizedRequest.mockResolvedValueOnce(mockResponse);

            const result = await client.getPostings();

            expect(result)
                .toEqual(mockResponse);
            expect(mockSendAuthorizedRequest)
                .toHaveBeenCalledWith('/vendor/jobs/postings', {});
        });

        it('should handle errors gracefully when the API request fails', async () => {
            mockSendAuthorizedRequest.mockRejectedValueOnce(new Error('Request failed'));

            await expect(client.getPostings())
                .rejects
                .toThrow('Request failed');
        });
    });

    describe('creating a new job posting', () => {
        it('should call the API with the correct URL and correct HTTP method, without any query parameters', async () => {
            await client.createJobPosting({} as any);

            expect(mockSendAuthorizedRequest)
                .toHaveBeenCalledWith('/vendor/jobs/postings', {}, 'POST', expect.anything());
        });

        it('should pass the correct data (body) to the API', async () => {
            const mockedBody = { jobPosting: 'mocked-data' };
            await client.createJobPosting(mockedBody as any);

            expect(mockSendAuthorizedRequest)
                .toHaveBeenCalledWith(expect.any(String), expect.anything(), expect.any(String), mockedBody);
        });
    });

    describe('updating the job posting', () => {
        it('should call the API with the correct URL and correct HTTP method, without any query parameters', async () => {
            await client.updateJobPosting(1233, {} as any);
            await client.updateJobPosting(321, {} as any);

            expect(mockSendAuthorizedRequest)
                .toHaveBeenNthCalledWith(1, '/vendor/jobs/postings/1233', {}, 'PUT', expect.anything());
            expect(mockSendAuthorizedRequest)
                .toHaveBeenNthCalledWith(2, '/vendor/jobs/postings/321', {}, 'PUT', expect.anything());
        });

        it('should pass the correct data (body) to the API', async () => {
            const mockedBody = { jobPosting: 'mocked-data' };
            await client.updateJobPosting(1, mockedBody as any);

            expect(mockSendAuthorizedRequest)
                .toHaveBeenCalledWith(expect.any(String), expect.anything(), expect.any(String), mockedBody);
        });
    });

    describe('activate the job posting', () => {
        it('should call the API with the correct URL and correct HTTP method, without any query parameters', async () => {
            await client.activatePosting(123);
            await client.activatePosting({ id: 321 } as XingPosting);

            expect(mockSendAuthorizedRequest)
                .toHaveBeenNthCalledWith(1, '/vendor/jobs/postings/123/activate', {}, 'PUT');
            expect(mockSendAuthorizedRequest)
                .toHaveBeenNthCalledWith(2, '/vendor/jobs/postings/321/activate', {}, 'PUT');
        });
    });

    describe('archive the job posting', () => {
        it('should call the API with the correct URL and correct HTTP method, without any query parameters', async () => {
            await client.archivePosting(123);
            await client.archivePosting({ id: 321 } as XingPosting);

            expect(mockSendAuthorizedRequest)
                .toHaveBeenNthCalledWith(1, '/vendor/jobs/postings/123/archive', {}, 'PUT');
            expect(mockSendAuthorizedRequest)
                .toHaveBeenNthCalledWith(2, '/vendor/jobs/postings/321/archive', {}, 'PUT');
        });
    });

    describe('deactivate the job posting', () => {
        it('should call the API with the correct URL and correct HTTP method, without any query parameters', async () => {
            await client.deactivatePosting(123);
            await client.deactivatePosting({ id: 321 } as XingPosting);

            expect(mockSendAuthorizedRequest)
                .toHaveBeenNthCalledWith(1, '/vendor/jobs/postings/123/deactivate', {}, 'PUT');
            expect(mockSendAuthorizedRequest)
                .toHaveBeenNthCalledWith(2, '/vendor/jobs/postings/321/deactivate', {}, 'PUT');
        });
    });

    describe('delete the job posting', () => {
        it('should call the API with the correct URL and correct HTTP method, without any query parameters', async () => {
            await client.deletePosting(123);
            await client.deletePosting({ id: 321 } as XingPosting);

            expect(mockSendAuthorizedRequest)
                .toHaveBeenNthCalledWith(1, '/vendor/jobs/postings/123', {}, 'DELETE');
            expect(mockSendAuthorizedRequest)
                .toHaveBeenNthCalledWith(2, '/vendor/jobs/postings/321', {}, 'DELETE');
        });
    });
});
