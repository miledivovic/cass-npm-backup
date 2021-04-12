/**
 * Schema.org/PhysicalTherapy
 * A process of progressive physical care and rehabilitation aimed at improving a health condition.
 *
 * @author schema.org
 * @class PhysicalTherapy
 * @module org.schema
 */
module.exports = class PhysicalTherapy extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PhysicalTherapy";
	}

}