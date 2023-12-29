/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const StripeCardExpires: core.serialization.ObjectSchema<
    serializers.StripeCardExpires.Raw,
    Webflow.StripeCardExpires
> = core.serialization.object({
    year: core.serialization.number().optional(),
    month: core.serialization.number().optional(),
});

export declare namespace StripeCardExpires {
    interface Raw {
        year?: number | null;
        month?: number | null;
    }
}
