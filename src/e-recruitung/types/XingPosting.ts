import { EXingJobState } from './EXingJobState';
import { EXingCurrency } from './EXingCurrency';
import { EXingJobType } from './EXingJobType';
import { EXingJobLevel } from './EXingJobLevel';
import { EXingJobPointOfContactType } from './EXingJobPointOfContactType';
import { EXingReplySetting } from './EXingReplySetting';
import { EXingJobUserRole } from './EXingJobUserRole';

/**
 * Interface for individual job postings in the `getListOfPostings` response.
 */
export interface XingPosting {
    /** Unique identifier for the job posting. */
    id: number;

    /** Type of job posting. */
    type: string;

    /** Job title or function. */
    function: string;

    /** Current state of the posting (e.g., "created"). */
    state: EXingJobState;

    /** Name of the company posting the job. */
    company_name: string;

    /** URL linking to the company profile, if available. */
    company_profile_url?: string;

    /** Flag indicating if the job should be published to the company's profile. */
    publish_to_company?: boolean;

    /** Job salary currency. */
    currency?: EXingCurrency;

    /** HTML-formatted description of the job. */
    description?: string;

    /** Discipline or field of the job as text. */
    discipline_id_as_text?: string;

    /** Unique identifier for the discipline of the job. */
    discipline_id?: string;

    /** Industry type as text. */
    industry_id_as_text?: string;

    /** Unique identifier for the job's industry. */
    industry_id?: string;

    /** Custom job code (if provided). */
    job_code?: string;

    /** Type of job (e.g., FULL_TIME, PART_TIME). */
    job_type?: EXingJobType;

    /** ISO 639-1 language code for the job posting. */
    language?: string;

    /** Job classification or level. */
    level?: EXingJobLevel;

    /** Order ID associated with this job posting. */
    order_id: number;

    /** Organization ID of the company posting the job. */
    organization_id: number;

    /** Type of contact point for the job posting. */
    point_of_contact_type?: EXingJobPointOfContactType;

    /** URL to the job poster's profile, if available. */
    poster_url?: string | null;

    /** URL to the published job posting, if available. */
    posting_url?: string | null;

    /** Indicator if the job is public or private. */
    public: boolean;

    /** Reply email for applications, if applicable. */
    reply_email?: string | null;

    /** Method of application submission (e.g., email, URL). */
    reply_setting: EXingReplySetting;

    /** URL for submitting applications, if applicable. */
    reply_url?: string | null;

    /** Proposed salary information, if available. */
    salary?: string | null;

    /** Starting salary range, if applicable. */
    salary_range_start?: number | null;

    /** End salary range, if applicable. */
    salary_range_end?: number | null;

    /** Interval of salary payment (e.g., monthly, yearly), if applicable. */
    salary_interval?: string | null;

    /** Skills required for the job posting. */
    skills?: string | null;

    /** Classification of the job for student eligibility, if applicable. */
    student_classification_as_text?: string | null;

    /** Numeric classification of student eligibility, if applicable. */
    student_classification?: string | null;

    /** Tags associated with the job posting (e.g., keywords). */
    tags?: string;

    /** Indicator if additional information is available. */
    tell_me_more?: boolean;

    /** User role associated with posting this job (e.g., EMPLOYEE). */
    user_role?: EXingJobUserRole;

    /** Street address of the job's location. */
    street?: string | null;

    /** City of the job location. */
    city: string;

    /** Region or state of the job location. */
    region?: string | null;

    /** Country code of the job location (ISO 3166-1 alpha-2). */
    country: string;

    /** ZIP or postal code of the job location. */
    zipcode?: string | null;
}
