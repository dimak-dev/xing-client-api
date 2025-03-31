import XingBaseApiClient from 'common/XingBaseApiClient';
import type { XingERecruitingPaginatedResponse } from './types/XingERecruitingPaginatedResponse';
import type { XingOrder } from './types/XingOrder';
import type { XingGetOrdersParameters } from './types/XingGetOrdersParameters';
import type { XingGetPostingsParameters } from './types/XingGetPostingsParameters';
import type { XingPosting } from './types/XingPosting';
import type { XingCreatePostingRequest } from './types/XingCreatePostingRequest';
import type { XingCreatePostingResponse } from './types/XingCreatePostingResponse';

/**
 * Client for XING E-Recruiting API.
 *
 * The XING E-Recruiting API allows to post job postings on XING Jobs
 * as well as monitoring their status and performance.
 */
export class XingERecruitingApiClient extends XingBaseApiClient {
    /**
     * Get a paginated list of all orders for which the current oAuth user created postings.
     *
     * @param {XingGetOrdersParameters} [parameters]
     */
    public async getOrders(
        {
            ids,
            status,
            page,
        }: XingGetOrdersParameters = {},
    ): Promise<XingERecruitingPaginatedResponse<XingOrder>> {
        const params: Record<string, string> = {};
        if (ids && ids.length > 0) params.ids = ids.join(',');
        if (status) params.status = status.toString();
        if (page) params.page = page.toString();

        return this.sendAuthorizedRequest('/vendor/jobs/orders', params);
    }

    /**
     * Get a paginated list of all postings created by the current oAuth user.
     *
     * @param {XingGetPostingsParameters} [parameters]
     */
    public async getPostings(
        {
            page,
            ids,
        }: XingGetPostingsParameters = {},
    ): Promise<XingERecruitingPaginatedResponse<XingPosting>> {
        const params: Record<string, string> = {};
        if (ids) params.ids = ids.join(',');
        if (page) params.page = page.toString();
        return this.sendAuthorizedRequest('/vendor/jobs/postings', params);
    }

    /**
     * Creates a job posting on the Xing platform.
     *
     * @param {XingCreatePostingRequest} jobPosting Object containing the details of the job posting to be created.
     * @return {Promise<XingCreatePostingResponse>} Response object for the created job posting.
     */
    public async createJobPosting(jobPosting: XingCreatePostingRequest): Promise<XingCreatePostingResponse> {
        return this.sendAuthorizedRequest<XingCreatePostingResponse>('/vendor/jobs/postings', {}, 'POST', jobPosting);
    }
}
