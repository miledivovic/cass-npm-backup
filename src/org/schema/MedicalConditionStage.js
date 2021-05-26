const schema = {};
schema.MedicalIntangible = require("./MedicalIntangible.js");
/**
 * Schema.org/MedicalConditionStage
 * A stage of a medical condition, such as 'Stage IIIa'.
 *
 * @author schema.org
 * @class MedicalConditionStage
 * @module org.schema
 * @extends MedicalIntangible
 */
module.exports = class MedicalConditionStage extends schema.MedicalIntangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalConditionStage");
	}

	/**
	 * Schema.org/subStageSuffix
	 * The substage, e.g. 'a' for Stage IIIa.
	 *
	 * @property subStageSuffix
	 * @type Text
	 */
	subStageSuffix;

	/**
	 * Schema.org/stageAsNumber
	 * The stage represented as a number, e.g. 3.
	 *
	 * @property stageAsNumber
	 * @type Number
	 */
	stageAsNumber;

}