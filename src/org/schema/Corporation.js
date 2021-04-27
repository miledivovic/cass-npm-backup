/**
 * Schema.org/Corporation
 * Organization: A business corporation.
 *
 * @author schema.org
 * @class Corporation
 * @module org.schema
 */
module.exports = class Corporation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Corporation");
	}
};
