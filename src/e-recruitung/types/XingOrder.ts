import { EXingOrderStatus } from './EXingOrderStatus';

/**
 * Represents an order in Xing.
 */
export interface XingOrder {
    /**
     * Unique identifier for the order.
     *
     * @example 12345
     */
    order_id: number;

    /**
     * Identifier of the organization associated with the order.
     *
     * @example 67890
     */
    organization_id: number;

    /**
     * Type of the order.
     * @example "Campus"
     */
    kind: string;

    /**
     * Total number of postings allowed for this order.
     * @example 100
     */
    posting_amount_total: number;

    /**
     * Number of postings that have already been used.
     *
     * @example 25
     */
    posting_amount_used: number;

    /**
     * The duration of the posting in days.
     *
     * @example 30
     */
    posting_duration: number;

    /**
     * Start date of the order in YYYY-MM-DD format.
     *
     * @example "2023-01-01"
     */
    start_date: string;

    /**
     * End date of the order in YYYY-MM-DD format.
     *
     * @example "2023-12-31"
     */
    end_date: string;

    /**
     * Current status of the order (e.g., active).
     *
     * @example EXingOrderStatus.EXPIRED
     * @example "active"
     */
    status: EXingOrderStatus;
}
