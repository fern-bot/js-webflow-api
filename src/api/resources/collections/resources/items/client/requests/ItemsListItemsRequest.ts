/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface ItemsListItemsRequest {
    /**
     * Unique identifiers for CMS Locales. These UIDs are different from the Site locale identifier and are listed as `cmsLocaleId` in the Sites response. Applicable when using localization.
     */
    cmsLocaleIds?: string | string[];
    /**
     * Offset used for pagination if the results have more than limit records
     */
    offset?: number;
    /**
     * Maximum number of records to be returned (max limit: 100)
     */
    limit?: number;
}
