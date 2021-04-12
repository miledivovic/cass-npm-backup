/**
 * Schema.org/MedicalIndication
 * A condition or factor that indicates use of a medical therapy, including signs, symptoms, risk factors, anatomical states, etc.
 *
 * @author schema.org
 * @class MedicalIndication
 * @module org.schema
 */
public class MedicalIndication extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalIndication";
	}

}