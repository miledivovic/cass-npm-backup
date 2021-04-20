/**
 * Schema.org/CompoundPriceSpecification
 * A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. "electricity" or "final cleaning").
 *
 * @author schema.org
 * @class CompoundPriceSpecification
 * @module org.schema
 */
module.exports = class CompoundPriceSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CompoundPriceSpecification");
	}

}