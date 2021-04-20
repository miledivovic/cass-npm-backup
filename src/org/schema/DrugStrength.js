/**
 * Schema.org/DrugStrength
 * A specific strength in which a medical drug is available in a specific country.
 *
 * @author schema.org
 * @class DrugStrength
 * @module org.schema
 */
module.exports = class DrugStrength extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DrugStrength");
	}

}