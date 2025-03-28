import sendRequest from 'utils/sendRequest';
import type { XingERecruitingPaginatedResponse } from './types/XingERecruitingPaginatedResponse';
import type { XingOrder } from './types/XingOrder';
import type { XingGetOrdersRequest } from './types/XingGetOrdersRequest';

/**
 * Client for XING E-Recruiting API.
 *
 * The XING E-Recruiting API allows to post job postings on XING Jobs
 * as well as monitoring their status and performance.
 */
export class XingERecruitingApiClient {
    private readonly accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }

    private async sendRequest<T>(
        path: string,
        params: Record<string, string> = {},
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
        body?: unknown,
    ): Promise<T> {
        const url = `https://api.xing.com${path}?${new URLSearchParams(params).toString()}`;

        const requestInit: RequestInit = {
            method,
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        if ((method === 'POST' || method === 'PUT') && body) {
            requestInit.body = JSON.stringify(body);
        }

        const response = await sendRequest(url, requestInit);

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status} ${response.statusText}`);
        }

        if ((method === 'PUT' || method === 'DELETE') && response.status === 204) {
            return true as T;
        }

        return response.json();
    }

    public async getOrders(request: XingGetOrdersRequest = {}): Promise<XingERecruitingPaginatedResponse<XingOrder>> {
        const params: Record<string, string> = {};
        if (request.ids && request.ids.length > 0) params.ids = request.ids.join(',');
        if (request.status) params.status = request.status.toString();
        if (request.page) params.page = request.page.toString();

        return this.sendRequest('/vendor/jobs/orders', { ...params });
    }
}
