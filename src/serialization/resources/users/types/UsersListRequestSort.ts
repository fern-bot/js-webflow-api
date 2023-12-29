/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Webflow from "../../../../api";
import * as core from "../../../../core";

export const UsersListRequestSort: core.serialization.Schema<
    serializers.UsersListRequestSort.Raw,
    Webflow.UsersListRequestSort
> = core.serialization.enum_([
    "CreatedOn",
    "-CreatedOn",
    "Email",
    "-Email",
    "Status",
    "-Status",
    "LastLogin",
    "-LastLogin",
    "UpdatedOn",
    "-UpdatedOn",
]);

export declare namespace UsersListRequestSort {
    type Raw =
        | "CreatedOn"
        | "-CreatedOn"
        | "Email"
        | "-Email"
        | "Status"
        | "-Status"
        | "LastLogin"
        | "-LastLogin"
        | "UpdatedOn"
        | "-UpdatedOn";
}