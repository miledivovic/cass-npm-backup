/**
 * Schema.org/GovernmentOffice
 * A government office&#x2014;for example, an IRS or DMV office.
 *
 * @author schema.org
 * @class GovernmentOffice
 * @module org.schema
 */
public class GovernmentOffice extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "GovernmentOffice";
	}

}