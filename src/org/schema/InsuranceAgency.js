/**
 * Schema.org/InsuranceAgency
 * An Insurance agency.
 *
 * @author schema.org
 * @class InsuranceAgency
 * @module org.schema
 */
public class InsuranceAgency extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "InsuranceAgency";
	}

}