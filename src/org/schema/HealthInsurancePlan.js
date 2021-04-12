/**
 * Schema.org/HealthInsurancePlan
 * A US-style health insurance plan, including PPOs, EPOs, and HMOs. 
 *
 * @author schema.org
 * @class HealthInsurancePlan
 * @module org.schema
 */
public class HealthInsurancePlan extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HealthInsurancePlan";
	}

}