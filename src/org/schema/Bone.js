/**
 * Schema.org/Bone
 * Rigid connective tissue that comprises up the skeletal structure of the human body.
 *
 * @author schema.org
 * @class Bone
 * @module org.schema
 */
module.exports = class Bone extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Bone");
	}
};
