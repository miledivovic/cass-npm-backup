/**
 * Schema.org/TherapeuticProcedure
 * A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition.
 *
 * @author schema.org
 * @class TherapeuticProcedure
 * @module org.schema
 */
module.exports = class TherapeuticProcedure extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "TherapeuticProcedure");
	}
};
