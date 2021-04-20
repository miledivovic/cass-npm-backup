/**
 * Schema.org/CovidTestingFacility
 * A CovidTestingFacility is a [[MedicalClinic]] where testing for the COVID-19 Coronavirus
      disease is available. If the facility is being made available from an established [[Pharmacy]], [[Hotel]], or other
      non-medical organization, multiple types can be listed. This makes it easier to re-use existing schema.org information
      about that place e.g. contact info, address, opening hours. Note that in an emergency, such information may not always be reliable.
      
 *
 * @author schema.org
 * @class CovidTestingFacility
 * @module org.schema
 */
module.exports = class CovidTestingFacility extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CovidTestingFacility");
	}

}