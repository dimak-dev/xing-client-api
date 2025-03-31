/**
 * Enum representing the remote work options available for a job posting.
 *
 * @enum {string}
 * @property {string} FULLY_REMOTE - The job offers a fully remote option.
 * @property {string} PARTIALLY_REMOTE - The job offers a mix of remote and on-site work.
 * @property {string} NON_REMOTE - The job requires full-time on-site work.
 *
 * @example
 * EXingRemoteOption.FULLY_REMOTE // "FULLY_REMOTE"
 * EXingRemoteOption.HYBRID // "PARTIALLY_REMOTE"
 * EXingRemoteOption.ON_SITE // "NON_REMOTE"
 */
export enum EXingRemoteOption {
    /** The job offers a fully remote option. */
    FULLY_REMOTE = 'FULLY_REMOTE',

    /** The job offers a mix of remote and on-site work. */
    PARTIALLY_REMOTE = 'PARTIALLY_REMOTE',

    /** The job requires full-time on-site work. */
    NON_REMOTE = 'NON_REMOTE',
}
