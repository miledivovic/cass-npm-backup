/**
 * Schema.org/AutoRepair
 * Car repair business.
 *
 * @author schema.org
 * @class AutoRepair
 * @module org.schema
 */
module.exports = class AutoRepair extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "AutoRepair");
	}
};
