const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Diet
 * A strategy of regulating the intake of food to achieve or maintain a specific health-related goal.
 *
 * @author schema.org
 * @class Diet
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Diet extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Diet");
	}

	/**
	 * Schema.org/physiologicalBenefits
	 * Specific physiologic benefits associated to the plan.
	 *
	 * @property physiologicalBenefits
	 * @type Text
	 */
	physiologicalBenefits;

	/**
	 * Schema.org/risks
	 * Specific physiologic risks associated to the diet plan.
	 *
	 * @property risks
	 * @type Text
	 */
	risks;

	/**
	 * Schema.org/expertConsiderations
	 * Medical expert advice related to the plan.
	 *
	 * @property expertConsiderations
	 * @type Text
	 */
	expertConsiderations;

	/**
	 * Schema.org/endorsers
	 * People or organizations that endorse the plan.
	 *
	 * @property endorsers
	 * @type Person
	 */
	endorsers;

	/**
	 * Schema.org/dietFeatures
	 * Nutritional information specific to the dietary plan. May include dietary recommendations on what foods to avoid, what foods to consume, and specific alterations/deviations from the USDA or other regulatory body's approved dietary guidelines.
	 *
	 * @property dietFeatures
	 * @type Text
	 */
	dietFeatures;

}