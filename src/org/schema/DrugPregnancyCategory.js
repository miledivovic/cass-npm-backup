/**
 * Schema.org/DrugPregnancyCategory
 * Categories that represent an assessment of the risk of fetal injury due to a drug or pharmaceutical used as directed by the mother during pregnancy.
 *
 * @author schema.org
 * @class DrugPregnancyCategory
 * @module org.schema
 */
module.exports = class DrugPregnancyCategory extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "DrugPregnancyCategory");
	}
};
