import type { EXingOrderStatus } from './EXingOrderStatus';

/**
 * Represents the request structure for fetching Xing orders.
 */

export interface XingGetOrdersRequest {
    /**
     * A list of order IDs to filter the results for.
     * If not provided, all orders will be returned.
     *
     * @example [1, 2, 3]
     */
    ids?: Array<number>;

    /**
     * The current page index for pagination.
     * Defaults to 1 if not specified.
     * Page index must be a positive integer.
     *
     * @example 1
     */
    page?: number;

    /**
     * Filters orders by their current status.
     * Available options: EXingOrderStatus.ACTIVE, EXingOrderStatus.UNSTARTED, EXingOrderStatus.EXPIRED.
     *
     * @example EXingOrderStatus.ACTIVE
     */
    status?: EXingOrderStatus;
}
