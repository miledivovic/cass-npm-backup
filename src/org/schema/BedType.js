/**
 * Schema.org/BedType
 * A type of bed. This is used for indicating the bed or beds available in an accommodation.
 *
 * @author schema.org
 * @class BedType
 * @module org.schema
 */
module.exports = class BedType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BedType";
	}

}