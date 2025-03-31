/**
 * Enum representing job type classifications.
 *
 * @enum {string}
 * @property {string} FULL_TIME - Full-time job.
 * @property {string} PART_TIME - Part-time job.
 * @property {string} INTERNSHIP - Internship position.
 * @property {string} FREELANCE - Freelance work.
 * @property {string} TEMPORARY - Temporary employment.
 * @property {string} TRAINING - Training or apprenticeship position.
 *
 * @example
 * EXingJobType.FULL_TIME   // "FULL_TIME"
 * EXingJobType.INTERNSHIP  // "INTERNSHIP"
 * EXingJobType.TRAINING    // "TRAINING"
 */
export enum EXingJobType {
    /** Full-time job. */
    FULL_TIME = 'FULL_TIME',

    /** Part-time job. */
    PART_TIME = 'PART_TIME',

    /** Internship position. */
    INTERNSHIP = 'INTERNSHIP',

    /** Freelance work. */
    FREELANCE = 'FREELANCE',

    /** Temporary employment. */
    TEMPORARY = 'TEMPORARY',

    /** Training or apprenticeship position. */
    TRAINING = 'TRAINING',
}
