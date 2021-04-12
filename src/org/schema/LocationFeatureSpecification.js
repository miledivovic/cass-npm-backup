/**
 * Schema.org/LocationFeatureSpecification
 * Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality.
 *
 * @author schema.org
 * @class LocationFeatureSpecification
 * @module org.schema
 */
module.exports = class LocationFeatureSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "LocationFeatureSpecification";
	}

}