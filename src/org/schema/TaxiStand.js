/**
 * Schema.org/TaxiStand
 * A taxi stand.
 *
 * @author schema.org
 * @class TaxiStand
 * @module org.schema
 */
public class TaxiStand extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TaxiStand";
	}

}