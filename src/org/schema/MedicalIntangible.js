/**
 * Schema.org/MedicalIntangible
 * A utility class that serves as the umbrella for a number of 'intangible' things in the medical space.
 *
 * @author schema.org
 * @class MedicalIntangible
 * @module org.schema
 */
public class MedicalIntangible extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalIntangible";
	}

}