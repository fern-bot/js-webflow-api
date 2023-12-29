/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Webflow from "../../../../../api";
import * as core from "../../../../../core";

export const SitesPublishRequest: core.serialization.Schema<
    serializers.SitesPublishRequest.Raw,
    Webflow.SitesPublishRequest
> = core.serialization.object({
    customDomains: core.serialization.list(core.serialization.string()).optional(),
    publishToWebflowSubdomain: core.serialization.boolean().optional(),
});

export declare namespace SitesPublishRequest {
    interface Raw {
        customDomains?: string[] | null;
        publishToWebflowSubdomain?: boolean | null;
    }
}
