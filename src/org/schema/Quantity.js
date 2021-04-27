/**
 * Schema.org/Quantity
 * Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 Kg' or '4 milligrams'.
 *
 * @author schema.org
 * @class Quantity
 * @module org.schema
 */
module.exports = class Quantity extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Quantity");
	}
};
