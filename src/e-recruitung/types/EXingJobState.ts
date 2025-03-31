/**
 * Enum representing the states of a job.
 */
export enum EXingJobState {
    /** The job has been created but is not yet active. */
    CREATED = 'created',

    /** The job is currently active and operational. */
    ACTIVE = 'active',

    /** The job has been deactivated and is temporarily inactive. */
    DEACTIVATED = 'deactivated',

    /** The job has been archived for historical records. */
    ARCHIVED = 'archived',

    /** The job has been permanently deleted. */
    DELETED = 'deleted',
}
