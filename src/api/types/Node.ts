/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "..";

/**
 * A generic representation of a content element within the Document Object Model (DOM). Each node has a unique identifier and a specific type that determines its content structure and attributes.
 */
export interface Node {
    /** Node UUID */
    id?: string;
    type?: Webflow.NodeType;
    text?: Webflow.TextNode;
    image?: Webflow.ImageNode;
    attributes?: Record<string, string>;
}
