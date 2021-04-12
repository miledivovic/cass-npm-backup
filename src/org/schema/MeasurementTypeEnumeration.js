/**
 * Schema.org/MeasurementTypeEnumeration
 * Enumeration of common measurement types (or dimensions), for example "chest" for a person, "inseam" for pants, "gauge" for screws, or "wheel" for bicycles.
 *
 * @author schema.org
 * @class MeasurementTypeEnumeration
 * @module org.schema
 */
module.exports = class MeasurementTypeEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MeasurementTypeEnumeration";
	}

}