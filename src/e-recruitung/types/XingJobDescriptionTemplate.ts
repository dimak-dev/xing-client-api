import type { XingJobDescriptionSectionContent } from './XingJobDescriptionSectionContent';

/**
 * Interface representing the structure of a detailed job description template.
 *
 * @property {string} [title_color] - Hexadecimal color code for the title. (Optional)
 * @property {string} [header_image] - URL of the header image. (Optional)
 * @property {string} [footer_image] - URL of the footer image. (Optional)
 *
 * @property {XingJobDescriptionSectionContent} [company_description] - Section describing the company. (Optional)
 * @property {XingJobDescriptionSectionContent} [responsibility] - Section outlining responsibilities. (Optional)
 * @property {XingJobDescriptionSectionContent} [skills] - Section listing skills required. (Optional)
 * @property {XingJobDescriptionSectionContent} [we_offer] - Section describing the offerings of the company. (Optional)
 * @property {XingJobDescriptionSectionContent} [contact_info] - Section containing contact information. (Optional)
 * @property {string} [generic_description] - Generic description with a maximum of 29,000 characters. (Optional)
 *
 * @property {string} [video_youtube] - YouTube video URL for integration. (Optional)
 * @property {string} [video_vimeo] - Vimeo video URL for integration. (Optional)
 *
 * @property {string} [social_website] - Company website URL. (Optional)
 * @property {string} [social_facebook] - Facebook profile URL. (Optional)
 * @property {string} [social_twitter] - Twitter profile URL. (Optional)
 * @property {string} [social_youtube] - YouTube profile URL. (Optional)
 * @property {string} [social_xing] - Xing profile URL. (Optional)
 * @property {string} [social_instagram] - Instagram profile URL. (Optional)
 * @property {string} [social_pinterest] - Pinterest profile URL. (Optional)
 * @property {string} [social_tiktok] - TikTok profile URL. (Optional)
 * @property {string} [social_kununu] - Kununu profile URL. (Optional)
 *
 * @example
 * const jobTemplate: XingJobDescriptionTemplate = {
 *   title_color: "#FF5733",
 *   header_image: "https://example.com/header.jpg",
 *   company_description: {
 *     title: "About Us",
 *     content: "We are a leading company in the tech industry."
 *   },
 *   video_youtube: "https://youtube.com/exampleVideo",
 *   social_website: "https://companywebsite.com"
 * };
 */
export interface XingJobDescriptionTemplate {
    /** Hexadecimal color code for the title (e.g., "#FF5733"). */
    title_color?: string;

    /** URL of the header image. */
    header_image?: string;

    /** URL of the footer image. */
    footer_image?: string;

    // Template sections
    /** Section describing the company. */
    company_description?: XingJobDescriptionSectionContent;

    /** Section outlining the responsibilities. */
    responsibility?: XingJobDescriptionSectionContent;

    /** Section listing the required skills. */
    skills?: XingJobDescriptionSectionContent;

    /** Section describing what the company offers. */
    we_offer?: XingJobDescriptionSectionContent;

    /** Section containing contact information. */
    contact_info?: XingJobDescriptionSectionContent;

    /** Generic description with a limit of 29,000 characters. */
    generic_description?: string;

    // Video integration
    /** YouTube video URL for embedding. */
    video_youtube?: string;

    /** Vimeo video URL for embedding. */
    video_vimeo?: string;

    // Social media links
    /** URL to the company website. */
    social_website?: string;

    /** URL to the company's Facebook profile. */
    social_facebook?: string;

    /** URL to the company's Twitter profile. */
    social_twitter?: string;

    /** URL to the company's YouTube profile. */
    social_youtube?: string;

    /** URL to the company's Xing profile. */
    social_xing?: string;

    /** URL to the company's Instagram profile. */
    social_instagram?: string;

    /** URL to the company's Pinterest profile. */
    social_pinterest?: string;

    /** URL to the company's TikTok profile. */
    social_tiktok?: string;

    /** URL to the company's Kununu profile. */
    social_kununu?: string;
}
