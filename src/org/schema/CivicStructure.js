/**
 * Schema.org/CivicStructure
 * A public structure, such as a town hall or concert hall.
 *
 * @author schema.org
 * @class CivicStructure
 * @module org.schema
 */
module.exports = class CivicStructure extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "CivicStructure");
	}
};
