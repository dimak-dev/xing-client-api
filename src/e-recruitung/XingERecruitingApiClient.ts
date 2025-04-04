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
    private getPostingId(jobPosting: XingPosting | number): number {
        if (typeof jobPosting === 'number') return jobPosting;
        return jobPosting.id;
    }

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

    /**
     * Updates an existing job posting on the Xing platform.
     *
     * @param {number} jobPostingId The job posting id.
     * @param{Partial<XingCreatePostingRequest>} jobPosting Payload containing the new data.
     * @returns A promise resolving to void if the update is successful.
     */
    public async updateJobPosting(jobPostingId: number, jobPosting: Partial<XingCreatePostingRequest>): Promise<void> {
        return this.sendAuthorizedRequest<void>(`/vendor/jobs/postings/${jobPostingId}`, {}, 'PUT', jobPosting);
    }

    /**
     * Activates a job posting on the Xing platform.
     *
     * @param {number} jobPostingId Job posting id to activate.
     */
    public async activatePosting(jobPostingId: number): Promise<void>;

    /**
     * Activates a job posting on the Xing platform.
     *
     * @param {XingPosting} jobPosting Job posting id to activate.
     */
    public async activatePosting(jobPosting: XingPosting): Promise<void>;

    /**
     * Activates a job posting on the Xing platform.
     *
     * @param {number | XingPosting} jobPosting Job posting id to activate.
     */
    public async activatePosting(jobPosting: number | XingPosting): Promise<void> {
        const jobPostingId = this.getPostingId(jobPosting);

        return this.sendAuthorizedRequest<void>(`/vendor/jobs/postings/${jobPostingId}/activate`, {}, 'PUT');
    }

    /**
     * Archives a job posting on the Xing platform.
     *
     * @param {number} jobPostingId Job posting id to archive.
     */
    public async archivePosting(jobPostingId: number): Promise<void>;

    /**
     * Archives a job posting on the Xing platform.
     *
     * @param {XingPosting} jobPosting Job posting id to archive.
     */
    public async archivePosting(jobPosting: XingPosting): Promise<void>;

    /**
     * Archives a job posting on the Xing platform.
     *
     * @param {number | XingPosting} jobPosting Job posting id to archive.
     */
    public async archivePosting(jobPosting: number | XingPosting): Promise<void> {
        const jobPostingId = this.getPostingId(jobPosting);

        return this.sendAuthorizedRequest<void>(`/vendor/jobs/postings/${jobPostingId}/archive`, {}, 'PUT');
    }

    /**
     * Deactivates a job posting on the Xing platform.
     *
     * @param {XingPosting} jobPosting Job posting to deactivate.
     */
    public async deactivatePosting(jobPosting: XingPosting): Promise<void>;

    /**
     * Deactivates a job posting on the Xing platform.
     *
     * @param {number} jobPostingId Job posting id to deactivate.
     */
    public async deactivatePosting(jobPostingId: number): Promise<void>;

    /**
     * Deactivates a job posting on the Xing platform.
     *
     * @param {number | XingPosting} jobPosting Job posting to deactivate.
     */
    public async deactivatePosting(jobPosting: number | XingPosting): Promise<void> {
        const jobPostingId = this.getPostingId(jobPosting);

        return this.sendAuthorizedRequest<void>(`/vendor/jobs/postings/${jobPostingId}/deactivate`, {}, 'PUT');
    }

    /**
     * Deletes a job posting on the Xing platform.
     *
     * @param {number} jobPostingId Job posting id to be deleted.
     */
    public async deletePosting(jobPostingId: number): Promise<void>;

    /**
     * Deletes a job posting on the Xing platform.
     *
     * @param {XingPosting} jobPosting Job posting to be deleted.
     */
    public async deletePosting(jobPosting: XingPosting): Promise<void>;

    /**
     * Deletes a job posting on the Xing platform.
     *
     * @param {number | XingPosting} jobPosting Job posting to be deleted.
     */
    public async deletePosting(jobPosting: number | XingPosting): Promise<void> {
        return this.sendAuthorizedRequest<void>(`/vendor/jobs/postings/${this.getPostingId(jobPosting)}`, {}, 'DELETE');
    }
}
