/**
 * Schema.org/BodyOfWater
 * A body of water, such as a sea, ocean, or lake.
 *
 * @author schema.org
 * @class BodyOfWater
 * @module org.schema
 */
public class BodyOfWater extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BodyOfWater";
	}

}