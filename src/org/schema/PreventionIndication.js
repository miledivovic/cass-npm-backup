/**
 * Schema.org/PreventionIndication
 * An indication for preventing an underlying condition, symptom, etc.
 *
 * @author schema.org
 * @class PreventionIndication
 * @module org.schema
 */
module.exports = class PreventionIndication extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PreventionIndication");
	}

}