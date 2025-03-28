/**
 * Represents a paginated response structure for XING E-Recruiting API.
 *
 * @template T - The type of the items in the collection.
 */
export interface XingERecruitingPaginatedResponse<T> {
    /**
     * The total number of items in the response.
     *
     * @example 150
     */
    total: number;

    /**
     * The current page number of the paginated response.
     *
     * @example 1
     */
    current_page: number;

    /**
     * The total number of pages available.
     *
     * @example 10
     */
    total_pages: number;

    /**
     * Collection of items containing detailed information.
     */
    collection: Array<T>;
}
