const schema = {};
schema.MedicalEntity = require("./MedicalEntity.js");
/**
 * Schema.org/DrugCost
 * The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for sale; see the Offer type for that. This type will typically be used to tag wholesale or average retail cost of a drug, or maximum reimbursable cost. Costs of medical drugs vary widely depending on how and where they are paid for, so while this type captures some of the variables, costs should be used with caution by consumers of this schema's markup.
 *
 * @author schema.org
 * @class DrugCost
 * @module org.schema
 * @extends MedicalEntity
 */
module.exports = class DrugCost extends schema.MedicalEntity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DrugCost");
	}

	/**
	 * Schema.org/costCurrency
	 * The currency (in 3-letter of the drug cost. See: http://en.wikipedia.org/wiki/ISO_4217. 
	 *
	 * @property costCurrency
	 * @type Text
	 */
	costCurrency;

	/**
	 * Schema.org/applicableLocation
	 * The location in which the status applies.
	 *
	 * @property applicableLocation
	 * @type AdministrativeArea
	 */
	applicableLocation;

	/**
	 * Schema.org/costOrigin
	 * Additional details to capture the origin of the cost data. For example, 'Medicare Part B'.
	 *
	 * @property costOrigin
	 * @type Text
	 */
	costOrigin;

	/**
	 * Schema.org/costCategory
	 * The category of cost, such as wholesale, retail, reimbursement cap, etc.
	 *
	 * @property costCategory
	 * @type DrugCostCategory
	 */
	costCategory;

	/**
	 * Schema.org/costPerUnit
	 * The cost per unit of the drug.
	 *
	 * @property costPerUnit
	 * @type Text
	 */
	costPerUnit;

	/**
	 * Schema.org/drugUnit
	 * The unit in which the drug is measured, e.g. '5 mg tablet'.
	 *
	 * @property drugUnit
	 * @type Text
	 */
	drugUnit;

}