/**
 * Enum representing the classification of students.
 *
 * @enum {string}
 * @property {string} BACHELOR - Bachelor's degree student.
 * @property {string} MASTER - Master's degree student.
 * @property {string} PHD - Doctoral (PhD) degree student.
 * @property {string} STUDENT - General student classification.
 *
 * @example
 * StudentClassification.BACHELOR // "bachelor"
 * StudentClassification.PHD      // "phd"
 */
export enum EXingStudentClassification {
    /** Bachelor's degree student. */
    BACHELOR = 'bachelor',

    /** Master's degree student. */
    MASTER = 'master',

    /** Doctoral (PhD) degree student. */
    PHD = 'phd',

    /** General student classification. */
    STUDENT = 'student',
}
