import { XingERecruitingApiClient } from './XingERecruitingApiClient';
import type { XingERecruitingPaginatedResponse } from './types/XingERecruitingPaginatedResponse';
import type { XingOrder } from './types/XingOrder';
import { EXingOrderStatus } from './types/EXingOrderStatus';

describe('XingERecruitingApiClient', () => {
    let client: XingERecruitingApiClient;
    let mockSendRequest: jest.SpyInstance;

    beforeEach(() => {
        client = new XingERecruitingApiClient('mockAccessToken');
        mockSendRequest = jest.spyOn(client as any, 'sendRequest')
            .mockImplementation(async () => null);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('retrieving orders', () => {
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
            mockSendRequest.mockResolvedValueOnce(mockResponse);

            const result = await client.getOrders();

            expect(result)
                .toEqual(mockResponse);
            expect(mockSendRequest)
                .toHaveBeenCalledWith('/vendor/jobs/orders', {});
        });

        it('should call the API with provided IDs', async () => {
            await client.getOrders({ ids: [123] });

            expect(mockSendRequest)
                .toHaveBeenCalledWith('/vendor/jobs/orders', { ids: '123' });

            await client.getOrders({ ids: [123, 456] });

            expect(mockSendRequest)
                .toHaveBeenCalledWith('/vendor/jobs/orders', { ids: '123,456' });
        });

        it('should call the API with provided status filter', async () => {
            await client.getOrders({ status: EXingOrderStatus.ACTIVE });

            expect(mockSendRequest)
                .toHaveBeenCalledWith('/vendor/jobs/orders', { status: 'active' });
        });

        it('should call the API with provided pagination parameter', async () => {
            await client.getOrders({ page: 2 });

            expect(mockSendRequest)
                .toHaveBeenCalledWith('/vendor/jobs/orders', { page: '2' });
        });

        it('should handle errors gracefully when the API request fails', async () => {
            mockSendRequest.mockRejectedValueOnce(new Error('Request failed'));

            await expect(client.getOrders())
                .rejects
                .toThrow('Request failed');
        });
    });
});
