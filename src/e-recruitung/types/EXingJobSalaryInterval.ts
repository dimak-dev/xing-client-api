/**
 * Enum representing the intervals for specifying salary in a job posting.
 *
 * @enum {string}
 * @property {string} HOUR - Salary is specified per hour.
 * @property {string} DAY - Salary is specified per day.
 * @property {string} WEEK - Salary is specified per week.
 * @property {string} MONTH - Salary is specified per month.
 * @property {string} YEAR - Salary is specified per year.
 *
 * @example
 * SalaryInterval.HOUR  // "HOUR"
 * SalaryInterval.DAY   // "DAY"
 * SalaryInterval.WEEK  // "WEEK"
 * SalaryInterval.MONTH // "MONTH"
 * SalaryInterval.YEAR  // "YEAR"
 */
export enum EXingJobSalaryInterval {
    /** Salary is specified per hour. */
    HOUR = 'HOUR',

    /** Salary is specified per day. */
    DAY = 'DAY',

    /** Salary is specified per week. */
    WEEK = 'WEEK',

    /** Salary is specified per month. */
    MONTH = 'MONTH',

    /** Salary is specified per year. */
    YEAR = 'YEAR',
}
