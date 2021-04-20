/**
 * Schema.org/HealthPlanNetwork
 * A US-style health insurance plan network. 
 *
 * @author schema.org
 * @class HealthPlanNetwork
 * @module org.schema
 */
module.exports = class HealthPlanNetwork extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HealthPlanNetwork");
	}

}