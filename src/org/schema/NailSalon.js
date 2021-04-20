/**
 * Schema.org/NailSalon
 * A nail salon.
 *
 * @author schema.org
 * @class NailSalon
 * @module org.schema
 */
module.exports = class NailSalon extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","NailSalon");
	}

}