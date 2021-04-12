/**
 * Schema.org/HowToTool
 * A tool used (but not consumed) when performing instructions for how to achieve a result.
 *
 * @author schema.org
 * @class HowToTool
 * @module org.schema
 */
module.exports = class HowToTool extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HowToTool";
	}

}