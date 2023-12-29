/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const SitePublishPayload: core.serialization.ObjectSchema<
    serializers.SitePublishPayload.Raw,
    Webflow.SitePublishPayload
> = core.serialization.object({
    site: core.serialization.string().optional(),
    publishTime: core.serialization.date().optional(),
    domains: core.serialization.list(core.serialization.string()).optional(),
    publishedBy: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace SitePublishPayload {
    interface Raw {
        site?: string | null;
        publishTime?: string | null;
        domains?: string[] | null;
        publishedBy?: Record<string, unknown> | null;
    }
}