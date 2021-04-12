/**
 * Schema.org/TattooParlor
 * A tattoo parlor.
 *
 * @author schema.org
 * @class TattooParlor
 * @module org.schema
 */
module.exports = class TattooParlor extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TattooParlor";
	}

}