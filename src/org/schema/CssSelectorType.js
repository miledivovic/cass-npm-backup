/**
 * Schema.org/CssSelectorType
 * Text representing a CSS selector.
 *
 * @author schema.org
 * @class CssSelectorType
 * @module org.schema
 */
module.exports = class CssSelectorType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "CssSelectorType");
	}
};
