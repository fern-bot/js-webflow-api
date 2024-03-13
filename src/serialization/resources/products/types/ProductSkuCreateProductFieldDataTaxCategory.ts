/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Webflow from "../../../../api";
import * as core from "../../../../core";

export const ProductSkuCreateProductFieldDataTaxCategory: core.serialization.Schema<
    serializers.ProductSkuCreateProductFieldDataTaxCategory.Raw,
    Webflow.ProductSkuCreateProductFieldDataTaxCategory
> = core.serialization.enum_([
    "standard-taxable",
    "standard-exempt",
    "books-religious",
    "books-textbook",
    "clothing",
    "clothing-swimwear",
    "digital-goods",
    "digital-service",
    "drugs-non-prescription",
    "drugs-prescription",
    "food-bottled-water",
    "food-candy",
    "food-groceries",
    "food-prepared",
    "food-soda",
    "food-supplements",
    "magazine-individual",
    "magazine-subscription",
    "service-admission",
    "service-advertising",
    "service-dry-cleaning",
    "service-hairdressing",
    "service-installation",
    "service-miscellaneous",
    "service-parking",
    "service-printing",
    "service-professional",
    "service-repair",
    "service-training",
]);

export declare namespace ProductSkuCreateProductFieldDataTaxCategory {
    type Raw =
        | "standard-taxable"
        | "standard-exempt"
        | "books-religious"
        | "books-textbook"
        | "clothing"
        | "clothing-swimwear"
        | "digital-goods"
        | "digital-service"
        | "drugs-non-prescription"
        | "drugs-prescription"
        | "food-bottled-water"
        | "food-candy"
        | "food-groceries"
        | "food-prepared"
        | "food-soda"
        | "food-supplements"
        | "magazine-individual"
        | "magazine-subscription"
        | "service-admission"
        | "service-advertising"
        | "service-dry-cleaning"
        | "service-hairdressing"
        | "service-installation"
        | "service-miscellaneous"
        | "service-parking"
        | "service-printing"
        | "service-professional"
        | "service-repair"
        | "service-training";
}