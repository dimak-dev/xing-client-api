import { EXingJobLevel } from './EXingJobLevel';
import { EXingJobType } from './EXingJobType';
import { EXingReplySetting } from './EXingReplySetting';
import { XingJobDescriptionTemplate } from './XingJobDescriptionTemplate';
import { EXingRemoteOption } from './EXingRemoteOption';
import { EXingJobPointOfContactType } from './EXingJobPointOfContactType';
import { EXingJobUserRole } from './EXingJobUserRole';
import { EXingJobSalaryInterval } from './EXingJobSalaryInterval';
import { EXingCurrency } from './EXingCurrency';
import { EXingStudentClassification } from './EXingStudentClassification';
import { EXingJobDiscipline } from './EXingJobDiscipline';
import { EXingIndustry } from './EXingIndustry';

/**
 * Interface for creating a job posting on XING's platform.
 * Represents the required and optional fields needed for submitting a job post.
 */
export interface XingCreatePostingRequest {
    /**
     * Organization ID provided by XING sales.
     * @example 5160
     */
    organization_id: number;

    /**
     * Order ID for billing purposes.
     * @example 1022232
     */
    order_id: number;

    /**
     * Job title with a maximum of 255 characters.
     * @example "Technical Product Manager - Jobs Integration (m/w)"
     */
    function: string;

    /**
     * Name of the company posting the job (max 255 characters).
     * @example "New Work SE"
     */
    company_name: string;

    /**
     * HTML-formatted job description (max 10,000 characters).
     * @example "<p>Job description with allowed HTML tags</p>"
     */
    description?: string;

    /**
     * Alternative: A structured description template for the job post.
     */
    description_template?: XingJobDescriptionTemplate;

    /**
     * City where the job is located.
     * @example "Hamburg"
     */
    city: string;

    /**
     * 2-letter ISO country code for the job's location.
     * @example "DE" // Germany
     */
    country: string;

    /**
     * Application method to be used (reply settings).
     */
    reply_setting: EXingReplySetting;

    // Location details
    /**
     * ZIP code of the job location.
     */
    zipcode?: string;

    /**
     * Street name of the job location.
     */
    street?: string;

    /**
     * Region of the job location (e.g., state or province).
     */
    region?: string;

    /**
     * ISO 639-1 language code for the job post.
     * @example "en", "de"
     */
    language?: string;

    /**
     * Tags for the job posting (max 500 characters).
     */
    tags?: string;

    /**
     * Required skills for the job (max 255 characters).
     */
    skills?: string;

    /**
     * Job level classification.
     * @example "JOBLEVEL_3"
     */
    level?: EXingJobLevel;

    /**
     * Type of job.
     * @example "FULL_TIME"
     */
    job_type?: EXingJobType;

    /**
     * Discipline ID representing the specific field/sector of the job.
     * @example "1017" // Product Management
     */
    discipline_id?: EXingJobDiscipline;

    /**
     * Industry ID representing the job's industry.
     * @example "90000" // Internet and IT
     */
    industry_id?: EXingIndustry;

    // Remote options
    /**
     * Remote work options (multiple allowed).
     */
    remote_options?: EXingRemoteOption[];

    // Contact configuration
    /**
     * Point of contact type for the job posting.
     */
    point_of_contact_type?: EXingJobPointOfContactType;

    /**
     * User role associated with the job posting.
     */
    user_role?: EXingJobUserRole;

    // Application URLs
    /**
     * Email address for receiving applications. Required if `reply_setting` is `email`.
     */
    reply_email?: string;

    /**
     * URL for receiving applications. Required if `reply_setting` is `url`.
     */
    reply_url?: string;

    /**
     * Link to the poster's XING profile.
     */
    poster_url?: string;

    // Company profile
    /**
     * URL of the company profile.
     */
    company_profile_url?: string;

    /**
     * Boolean flag to publish the job post to the company's XING profile.
     */
    publish_to_company?: boolean;

    // Advanced features
    /**
     * Full HTML URL for the job advertisement.
     */
    posting_url?: string;

    /**
     * Base64-encoded logo image content for the job post.
     */
    posting_logo_content?: string;

    /**
     * Internal tracking code (max 100 characters).
     */
    job_code?: string;

    // Salary configuration
    /**
     * Fixed salary amount for the job.
     */
    salary?: number;

    /**
     * Minimum salary range.
     */
    salary_range_start?: number;

    /**
     * Maximum salary range.
     */
    salary_range_end?: number;

    /**
     * Interval for the salary (e.g., monthly, yearly).
     */
    salary_interval?: EXingJobSalaryInterval;

    /**
     * Currency for the salary amounts.
     */
    currency?: EXingCurrency;

    // Campus jobs
    /**
     * Classification relevant for campus or student jobs.
     */
    student_classification?: EXingStudentClassification;

    // Video integration
    /**
     * Video link for embedding (YouTube/Vimeo URL).
     */
    video_link?: string;

    // XING Apply specific
    /**
     * URL to the privacy policy for applicants.
     */
    xing_apply_privacy_policy?: string;

    /**
     * URL to the terms and conditions for applicants.
     */
    xing_apply_terms_and_conditions?: string;
}
