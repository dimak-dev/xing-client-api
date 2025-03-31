/**
 * Interface representing the content of a job description section.
 *
 * @property {string} [title] - The title of the job description section.
 *                              * Optional
 *                              * Maximum 255 characters
 *                              * HTML is not allowed
 *
 * @property {string} content - The main content of the job description section.
 *                               * Required
 *                               * Maximum 5,000 characters
 *                               * HTML is allowed
 *
 * @example
 * const jobDescription: XingJobDescriptionSectionContent = {
 *   title: "Requirements",
 *   content: "Candidates must have a minimum of 5 years experience."
 * };
 */
export interface XingJobDescriptionSectionContent {
    /** Optional title of the section (max 255 characters, no HTML). */
    title?: string;

    /** Main content of the section (max 5,000 characters, HTML allowed). */
    content: string;
}
