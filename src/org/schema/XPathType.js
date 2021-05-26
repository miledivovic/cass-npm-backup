const schema = {};
schema.Text = require("./Text.js");
/**
 * Schema.org/XPathType
 * Text representing an XPath (typically but not necessarily version 1.0).
 *
 * @author schema.org
 * @class XPathType
 * @module org.schema
 * @extends Text
 */
module.exports = class XPathType extends schema.Text {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","XPathType");
	}

}