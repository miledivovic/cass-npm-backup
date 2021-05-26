const schema = {};
schema.Thing = require("./Thing.js");
/**
 * Schema.org/MedicalEntity
 * The most generic type of entity related to health and the practice of medicine.
 *
 * @author schema.org
 * @class MedicalEntity
 * @module org.schema
 * @extends Thing
 */
module.exports = class MedicalEntity extends schema.Thing {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalEntity");
	}

	/**
	 * Schema.org/guideline
	 * A medical guideline related to this entity.
	 *
	 * @property guideline
	 * @type MedicalGuideline
	 */
	guideline;

	/**
	 * Schema.org/recognizingAuthority
	 * If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.
	 *
	 * @property recognizingAuthority
	 * @type Organization
	 */
	recognizingAuthority;

	/**
	 * Schema.org/legalStatus
	 * The drug or supplement's legal status, including any controlled substance schedules that apply.
	 *
	 * @property legalStatus
	 * @type MedicalEnumeration
	 */
	legalStatus;

	/**
	 * Schema.org/code
	 * A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.
	 *
	 * @property code
	 * @type MedicalCode
	 */
	code;

	/**
	 * Schema.org/relevantSpecialty
	 * If applicable, a medical specialty in which this entity is relevant.
	 *
	 * @property relevantSpecialty
	 * @type MedicalSpecialty
	 */
	relevantSpecialty;

	/**
	 * Schema.org/study
	 * A medical study or trial related to this entity.
	 *
	 * @property study
	 * @type MedicalStudy
	 */
	study;

	/**
	 * Schema.org/medicineSystem
	 * The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.
	 *
	 * @property medicineSystem
	 * @type MedicineSystem
	 */
	medicineSystem;

}