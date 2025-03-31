/**
 * Represents the request structure for fetching Xing job postings.
 */

export interface XingGetPostingsParameters {
    /**
     * A list of order IDs to filter the results for.
     * If not provided, all job postings will be returned.
     *
     * Example: [1, 2, 3]
     */
    ids?: Array<number>;

    /**
     * The current page index for pagination.
     * Defaults to 1 if not specified.
     * Must be a positive integer.
     *
     * Example: 1
     */
    page?: number;
}
