/**
 * Enum representing the point of contact type for a job posting.
 *
 * @enum {string}
 * @property {string} COMPANY - The company is the point of contact.
 * @property {string} USER - A specific user is the point of contact.
 * @property {string} NONE - No specific point of contact is set.
 *
 * @example
 * EXingJobPointOfContactType.COMPANY // "company"
 * EXingJobPointOfContactType.USER    // "user"
 * EXingJobPointOfContactType.NONE    // "none"
 */
export enum EXingJobPointOfContactType {
    /** The company is the point of contact. */
    COMPANY = 'company',

    /** A specific user is the point of contact. */
    USER = 'user',

    /** No specific point of contact is set. */
    NONE = 'none',
}
