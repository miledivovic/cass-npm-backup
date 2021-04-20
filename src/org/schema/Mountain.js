/**
 * Schema.org/Mountain
 * A mountain, like Mount Whitney or Mount Everest.
 *
 * @author schema.org
 * @class Mountain
 * @module org.schema
 */
module.exports = class Mountain extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Mountain");
	}

}