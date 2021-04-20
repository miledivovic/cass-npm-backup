/**
 * Schema.org/HealthInsurancePlan
 * A US-style health insurance plan, including PPOs, EPOs, and HMOs. 
 *
 * @author schema.org
 * @class HealthInsurancePlan
 * @module org.schema
 */
module.exports = class HealthInsurancePlan extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HealthInsurancePlan");
	}

}