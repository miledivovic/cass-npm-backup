const schema = {};
schema.PriceSpecification = require("./PriceSpecification.js");
/**
 * Schema.org/CompoundPriceSpecification
 * A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. "electricity" or "final cleaning").
 *
 * @author schema.org
 * @class CompoundPriceSpecification
 * @module org.schema
 * @extends PriceSpecification
 */
module.exports = class CompoundPriceSpecification extends schema.PriceSpecification {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CompoundPriceSpecification");
	}

	/**
	 * Schema.org/priceType
	 * Defines the type of a price specified for an offered product, for example a list price, a (temporary) sale price or a manufacturer suggested retail price. If multiple prices are specified for an offer the [[priceType]] property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or as a free form text string for price types that are not already predefined in PriceTypeEnumeration.
	 *
	 * @property priceType
	 * @type Text
	 */
	priceType;

	/**
	 * Schema.org/priceComponent
	 * This property links to all [[UnitPriceSpecification]] nodes that apply in parallel for the [[CompoundPriceSpecification]] node.
	 *
	 * @property priceComponent
	 * @type UnitPriceSpecification
	 */
	priceComponent;

}