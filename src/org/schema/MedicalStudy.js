const schema = {};
schema.MedicalEntity = require("./MedicalEntity.js");
/**
 * Schema.org/MedicalStudy
 * A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID.
 *
 * @author schema.org
 * @class MedicalStudy
 * @module org.schema
 * @extends MedicalEntity
 */
module.exports = class MedicalStudy extends schema.MedicalEntity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalStudy");
	}

	/**
	 * Schema.org/healthCondition
	 * Specifying the health condition(s) of a patient, medical study, or other target audience.
	 *
	 * @property healthCondition
	 * @type MedicalCondition
	 */
	healthCondition;

	/**
	 * Schema.org/status
	 * The status of the study (enumerated).
	 *
	 * @property status
	 * @type Text
	 */
	status;

	/**
	 * Schema.org/studySubject
	 * A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study.
	 *
	 * @property studySubject
	 * @type MedicalEntity
	 */
	studySubject;

	/**
	 * Schema.org/sponsor
	 * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
	 *
	 * @property sponsor
	 * @type Person
	 */
	sponsor;

	/**
	 * Schema.org/studyLocation
	 * The location in which the study is taking/took place.
	 *
	 * @property studyLocation
	 * @type AdministrativeArea
	 */
	studyLocation;

}