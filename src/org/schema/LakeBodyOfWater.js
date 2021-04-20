/**
 * Schema.org/LakeBodyOfWater
 * A lake (for example, Lake Pontrachain).
 *
 * @author schema.org
 * @class LakeBodyOfWater
 * @module org.schema
 */
module.exports = class LakeBodyOfWater extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LakeBodyOfWater");
	}

}