/**
 * Schema.org/StupidType
 * A StupidType for testing.
 *
 * @author schema.org
 * @class StupidType
 * @module org.schema
 */
module.exports = class StupidType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","StupidType");
	}

}