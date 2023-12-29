/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const PageCreatedWebhook: core.serialization.ObjectSchema<
    serializers.PageCreatedWebhook.Raw,
    Webflow.PageCreatedWebhook
> = core.serialization.object({
    siteId: core.serialization.string().optional(),
    pageId: core.serialization.string().optional(),
    pageTitle: core.serialization.string().optional(),
    createdAt: core.serialization.date().optional(),
});

export declare namespace PageCreatedWebhook {
    interface Raw {
        siteId?: string | null;
        pageId?: string | null;
        pageTitle?: string | null;
        createdAt?: string | null;
    }
}
