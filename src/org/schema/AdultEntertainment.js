/**
 * Schema.org/AdultEntertainment
 * An adult entertainment establishment.
 *
 * @author schema.org
 * @class AdultEntertainment
 * @module org.schema
 */
module.exports = class AdultEntertainment extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "AdultEntertainment");
	}
};
