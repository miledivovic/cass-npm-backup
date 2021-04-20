/**
 * Schema.org/BodyOfWater
 * A body of water, such as a sea, ocean, or lake.
 *
 * @author schema.org
 * @class BodyOfWater
 * @module org.schema
 */
module.exports = class BodyOfWater extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BodyOfWater");
	}

}