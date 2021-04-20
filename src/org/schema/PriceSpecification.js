/**
 * Schema.org/PriceSpecification
 * A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use [[MonetaryAmount]] to describe independent amounts of money such as a salary, credit card limits, etc.
 *
 * @author schema.org
 * @class PriceSpecification
 * @module org.schema
 */
module.exports = class PriceSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PriceSpecification");
	}

}