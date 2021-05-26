const schema = {};
schema.MedicalEntity = require("./MedicalEntity.js");
/**
 * Schema.org/MedicalCondition
 * Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc.
 *
 * @author schema.org
 * @class MedicalCondition
 * @module org.schema
 * @extends MedicalEntity
 */
module.exports = class MedicalCondition extends schema.MedicalEntity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalCondition");
	}

	/**
	 * Schema.org/differentialDiagnosis
	 * One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient.
	 *
	 * @property differentialDiagnosis
	 * @type DDxElement
	 */
	differentialDiagnosis;

	/**
	 * Schema.org/epidemiology
	 * The characteristics of associated patients, such as age, gender, race etc.
	 *
	 * @property epidemiology
	 * @type Text
	 */
	epidemiology;

	/**
	 * Schema.org/associatedAnatomy
	 * The anatomy of the underlying organ system or structures associated with this entity.
	 *
	 * @property associatedAnatomy
	 * @type AnatomicalSystem
	 */
	associatedAnatomy;

	/**
	 * Schema.org/naturalProgression
	 * The expected progression of the condition if it is not treated and allowed to progress naturally.
	 *
	 * @property naturalProgression
	 * @type Text
	 */
	naturalProgression;

	/**
	 * Schema.org/possibleTreatment
	 * A possible treatment to address this condition, sign or symptom.
	 *
	 * @property possibleTreatment
	 * @type MedicalTherapy
	 */
	possibleTreatment;

	/**
	 * Schema.org/secondaryPrevention
	 * A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition.
	 *
	 * @property secondaryPrevention
	 * @type MedicalTherapy
	 */
	secondaryPrevention;

	/**
	 * Schema.org/status
	 * The status of the study (enumerated).
	 *
	 * @property status
	 * @type Text
	 */
	status;

	/**
	 * Schema.org/possibleComplication
	 * A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc.
	 *
	 * @property possibleComplication
	 * @type Text
	 */
	possibleComplication;

	/**
	 * Schema.org/primaryPrevention
	 * A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination.
	 *
	 * @property primaryPrevention
	 * @type MedicalTherapy
	 */
	primaryPrevention;

	/**
	 * Schema.org/drug
	 * Specifying a drug or medicine used in a medication procedure.
	 *
	 * @property drug
	 * @type Drug
	 */
	drug;

	/**
	 * Schema.org/signOrSymptom
	 * A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experience of the medical condition.
	 *
	 * @property signOrSymptom
	 * @type MedicalSignOrSymptom
	 */
	signOrSymptom;

	/**
	 * Schema.org/expectedPrognosis
	 * The likely outcome in either the short term or long term of the medical condition.
	 *
	 * @property expectedPrognosis
	 * @type Text
	 */
	expectedPrognosis;

	/**
	 * Schema.org/riskFactor
	 * A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age,  coexisting condition.
	 *
	 * @property riskFactor
	 * @type MedicalRiskFactor
	 */
	riskFactor;

	/**
	 * Schema.org/stage
	 * The stage of the condition, if applicable.
	 *
	 * @property stage
	 * @type MedicalConditionStage
	 */
	stage;

	/**
	 * Schema.org/typicalTest
	 * A medical test typically performed given this condition.
	 *
	 * @property typicalTest
	 * @type MedicalTest
	 */
	typicalTest;

	/**
	 * Schema.org/pathophysiology
	 * Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.
	 *
	 * @property pathophysiology
	 * @type Text
	 */
	pathophysiology;

}