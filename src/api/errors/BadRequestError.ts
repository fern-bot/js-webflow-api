/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors";

export class BadRequestError extends errors.WebflowError {
    constructor(body?: unknown) {
        super({
            message: "BadRequestError",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}
