/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const TooManyRequestsErrorBody: core.serialization.ObjectSchema<
    serializers.TooManyRequestsErrorBody.Raw,
    Webflow.TooManyRequestsErrorBody
> = core.serialization.object({
    message: core.serialization.string().optional(),
    code: core.serialization.string().optional(),
    externalReference: core.serialization.string().optional(),
    details: core.serialization.list(core.serialization.unknown()).optional(),
});

export declare namespace TooManyRequestsErrorBody {
    interface Raw {
        message?: string | null;
        code?: string | null;
        externalReference?: string | null;
        details?: unknown[] | null;
    }
}