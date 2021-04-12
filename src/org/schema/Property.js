/**
 * Schema.org/Property
 * A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property.
 *
 * @author schema.org
 * @class Property
 * @module org.schema
 */
module.exports = class Property extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Property";
	}

}