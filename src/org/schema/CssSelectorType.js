const schema = {};
schema.Text = require("./Text.js");
/**
 * Schema.org/CssSelectorType
 * Text representing a CSS selector.
 *
 * @author schema.org
 * @class CssSelectorType
 * @module org.schema
 * @extends Text
 */
module.exports = class CssSelectorType extends schema.Text {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CssSelectorType");
	}

}