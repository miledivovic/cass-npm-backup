/**
 * Schema.org/HowTo
 * Instructions that explain how to achieve a result by performing a sequence of steps.
 *
 * @author schema.org
 * @class HowTo
 * @module org.schema
 */
module.exports = class HowTo extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "HowTo");
	}
};
