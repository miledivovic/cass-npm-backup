const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/WarrantyPromise
 * A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.
 *
 * @author schema.org
 * @class WarrantyPromise
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class WarrantyPromise extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WarrantyPromise");
	}

	/**
	 * Schema.org/durationOfWarranty
	 * The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days.
	 *
	 * @property durationOfWarranty
	 * @type QuantitativeValue
	 */
	durationOfWarranty;

	/**
	 * Schema.org/warrantyScope
	 * The scope of the warranty promise.
	 *
	 * @property warrantyScope
	 * @type WarrantyScope
	 */
	warrantyScope;

}