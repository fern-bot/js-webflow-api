/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Webflow from "../../../../../api";
import * as core from "../../../../../core";

export const UsersUpdateRequest: core.serialization.Schema<
    serializers.UsersUpdateRequest.Raw,
    Webflow.UsersUpdateRequest
> = core.serialization.object({
    data: core.serialization.lazyObject(async () => (await import("../../../..")).UsersUpdateRequestData).optional(),
    accessGroups: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace UsersUpdateRequest {
    interface Raw {
        data?: serializers.UsersUpdateRequestData.Raw | null;
        accessGroups?: string[] | null;
    }
}
