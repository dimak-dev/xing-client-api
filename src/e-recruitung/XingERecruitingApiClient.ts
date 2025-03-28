import type { XingERecruitingPaginatedResponse } from './types/XingERecruitingPaginatedResponse';
import type { XingOrder } from './types/XingOrder';
import type { XingGetOrdersRequest } from './types/XingGetOrdersRequest';
import XingBaseApiClient from '../common/XingBaseApiClient';

/**
 * Client for XING E-Recruiting API.
 *
 * The XING E-Recruiting API allows to post job postings on XING Jobs
 * as well as monitoring their status and performance.
 */
export class XingERecruitingApiClient extends XingBaseApiClient {
    public async getOrders(request: XingGetOrdersRequest = {}): Promise<XingERecruitingPaginatedResponse<XingOrder>> {
        const params: Record<string, string> = {};
        if (request.ids && request.ids.length > 0) params.ids = request.ids.join(',');
        if (request.status) params.status = request.status.toString();
        if (request.page) params.page = request.page.toString();

        return this.sendAuthorizedRequest('/vendor/jobs/orders', { ...params });
    }
}
