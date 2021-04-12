/**
 * Schema.org/DrugCostCategory
 * Enumerated categories of medical drug costs.
 *
 * @author schema.org
 * @class DrugCostCategory
 * @module org.schema
 */
public class DrugCostCategory extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DrugCostCategory";
	}

}