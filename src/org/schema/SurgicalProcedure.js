/**
 * Schema.org/SurgicalProcedure
 * A medical procedure involving an incision with instruments; performed for diagnose, or therapeutic purposes.
 *
 * @author schema.org
 * @class SurgicalProcedure
 * @module org.schema
 */
module.exports = class SurgicalProcedure extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "SurgicalProcedure");
	}
};
