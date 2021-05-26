const schema = {};
schema.AnatomicalStructure = require("./AnatomicalStructure.js");
/**
 * Schema.org/BrainStructure
 * Any anatomical structure which pertains to the soft nervous tissue functioning as the coordinating center of sensation and intellectual and nervous activity.
 *
 * @author schema.org
 * @class BrainStructure
 * @module org.schema
 * @extends AnatomicalStructure
 */
module.exports = class BrainStructure extends schema.AnatomicalStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BrainStructure");
	}

}