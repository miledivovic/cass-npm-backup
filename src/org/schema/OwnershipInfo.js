const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/OwnershipInfo
 * A structured value providing information about when a certain organization or person owned a certain product.
 *
 * @author schema.org
 * @class OwnershipInfo
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class OwnershipInfo extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OwnershipInfo");
	}

	/**
	 * Schema.org/ownedFrom
	 * The date and time of obtaining the product.
	 *
	 * @property ownedFrom
	 * @type DateTime
	 */
	ownedFrom;

	/**
	 * Schema.org/ownedThrough
	 * The date and time of giving up ownership on the product.
	 *
	 * @property ownedThrough
	 * @type DateTime
	 */
	ownedThrough;

	/**
	 * Schema.org/typeOfGood
	 * The product that this structured value is referring to.
	 *
	 * @property typeOfGood
	 * @type Product
	 */
	typeOfGood;

	/**
	 * Schema.org/acquiredFrom
	 * The organization or person from which the product was acquired.
	 *
	 * @property acquiredFrom
	 * @type Person
	 */
	acquiredFrom;

}