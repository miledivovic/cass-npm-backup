/**
 * Schema.org/VitalSign
 * Vital signs are measures of various physiological functions in order to assess the most basic body functions.
 *
 * @author schema.org
 * @class VitalSign
 * @module org.schema
 */
public class VitalSign extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "VitalSign";
	}

}