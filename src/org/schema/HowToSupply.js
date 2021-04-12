/**
 * Schema.org/HowToSupply
 * A supply consumed when performing the instructions for how to achieve a result.
 *
 * @author schema.org
 * @class HowToSupply
 * @module org.schema
 */
module.exports = class HowToSupply extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HowToSupply";
	}

}