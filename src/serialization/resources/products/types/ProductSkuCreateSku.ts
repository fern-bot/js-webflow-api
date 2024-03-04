/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Webflow from "../../../../api";
import * as core from "../../../../core";

export const ProductSkuCreateSku: core.serialization.ObjectSchema<
    serializers.ProductSkuCreateSku.Raw,
    Webflow.ProductSkuCreateSku
> = core.serialization.object({
    id: core.serialization.string().optional(),
    lastPublished: core.serialization.date().optional(),
    lastUpdated: core.serialization.date().optional(),
    createdOn: core.serialization.date().optional(),
    fieldData: core.serialization
        .lazyObject(async () => (await import("../../..")).ProductSkuCreateSkuFieldData)
        .optional(),
});

export declare namespace ProductSkuCreateSku {
    interface Raw {
        id?: string | null;
        lastPublished?: string | null;
        lastUpdated?: string | null;
        createdOn?: string | null;
        fieldData?: serializers.ProductSkuCreateSkuFieldData.Raw | null;
    }
}
