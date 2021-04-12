/**
 * Schema.org/MedicalContraindication
 * A condition or factor that serves as a reason to withhold a certain medical therapy. Contraindications can be absolute (there are no reasonable circumstances for undertaking a course of action) or relative (the patient is at higher risk of complications, but that these risks may be outweighed by other considerations or mitigated by other measures).
 *
 * @author schema.org
 * @class MedicalContraindication
 * @module org.schema
 */
module.exports = class MedicalContraindication extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalContraindication";
	}

}