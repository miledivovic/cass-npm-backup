/**
 * Schema.org/BrainStructure
 * Any anatomical structure which pertains to the soft nervous tissue functioning as the coordinating center of sensation and intellectual and nervous activity.
 *
 * @author schema.org
 * @class BrainStructure
 * @module org.schema
 */
module.exports = class BrainStructure extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BrainStructure";
	}

}