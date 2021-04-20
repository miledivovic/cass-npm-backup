/**
 * Schema.org/DatedMoneySpecification
 * A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. __Note:__ This type has been superseded by [[MonetaryAmount]] use of that type is recommended
 *
 * @author schema.org
 * @class DatedMoneySpecification
 * @module org.schema
 */
module.exports = class DatedMoneySpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DatedMoneySpecification");
	}

}