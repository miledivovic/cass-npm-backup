const schema = {};
schema.MedicalEntity = require("./MedicalEntity.js");
/**
 * Schema.org/MedicalDevice
 * Any object used in a medical capacity, such as to diagnose or treat a patient.
 *
 * @author schema.org
 * @class MedicalDevice
 * @module org.schema
 * @extends MedicalEntity
 */
module.exports = class MedicalDevice extends schema.MedicalEntity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalDevice");
	}

	/**
	 * Schema.org/procedure
	 * A description of the procedure involved in setting up, using, and/or installing the device.
	 *
	 * @property procedure
	 * @type Text
	 */
	procedure;

	/**
	 * Schema.org/seriousAdverseOutcome
	 * A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.
	 *
	 * @property seriousAdverseOutcome
	 * @type MedicalEntity
	 */
	seriousAdverseOutcome;

	/**
	 * Schema.org/contraindication
	 * A contraindication for this therapy.
	 *
	 * @property contraindication
	 * @type Text
	 */
	contraindication;

	/**
	 * Schema.org/postOp
	 * A description of the postoperative procedures, care, and/or followups for this device.
	 *
	 * @property postOp
	 * @type Text
	 */
	postOp;

	/**
	 * Schema.org/preOp
	 * A description of the workup, testing, and other preparations required before implanting this device.
	 *
	 * @property preOp
	 * @type Text
	 */
	preOp;

	/**
	 * Schema.org/adverseOutcome
	 * A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead.
	 *
	 * @property adverseOutcome
	 * @type MedicalEntity
	 */
	adverseOutcome;

}