/**
 * Enum representing the different user roles associated with a job posting.
 *
 * @enum {string}
 * @property {string} HR_CONSULTANT - The user is an HR consultant.
 * @property {string} HR_DEPARTMENT - The user is part of the HR department.
 * @property {string} MANAGER - The user is a hiring manager.
 * @property {string} EXTERNAL_RECRUITER - The user is an external recruiter.
 * @property {string} EMPLOYEE - The user is an employee.
 *
 * @example
 * EXingJobUserRole.HR_CONSULTANT // "HR_CONSULTANT"
 * EXingJobUserRole.HR_DEPARTMENT // "HR_DEPARTMENT"
 * EXingJobUserRole.MANAGER // "MANAGER"
 */
export enum EXingJobUserRole {
    /** The user is an HR consultant. */
    HR_CONSULTANT = 'HR_CONSULTANT',

    /** The user is part of the HR department. */
    HR_DEPARTMENT = 'HR_DEPARTMENT',

    /** The user is a hiring manager. */
    MANAGER = 'MANAGER',

    /** The user is an external recruiter. */
    EXTERNAL_RECRUITER = 'EXTERNAL_RECRUITER',

    /** The user is an employee. */
    EMPLOYEE = 'EMPLOYEE',
}
