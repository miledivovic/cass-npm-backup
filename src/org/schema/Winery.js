/**
 * Schema.org/Winery
 * A winery.
 *
 * @author schema.org
 * @class Winery
 * @module org.schema
 */
module.exports = class Winery extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Winery";
	}

}