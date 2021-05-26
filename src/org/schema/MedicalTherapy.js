const schema = {};
schema.TherapeuticProcedure = require("./TherapeuticProcedure.js");
/**
 * Schema.org/MedicalTherapy
 * Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both curative and palliative therapies. Medical therapies are typically processes of care relying upon pharmacotherapy, behavioral therapy, supportive therapy (with fluid or nutrition for example), or detoxification (e.g. hemodialysis) aimed at improving or preventing a health condition.
 *
 * @author schema.org
 * @class MedicalTherapy
 * @module org.schema
 * @extends TherapeuticProcedure
 */
module.exports = class MedicalTherapy extends schema.TherapeuticProcedure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalTherapy");
	}

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
	 * Schema.org/duplicateTherapy
	 * A therapy that duplicates or overlaps this one.
	 *
	 * @property duplicateTherapy
	 * @type MedicalTherapy
	 */
	duplicateTherapy;

}