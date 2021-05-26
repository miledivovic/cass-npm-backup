const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/MeasurementTypeEnumeration
 * Enumeration of common measurement types (or dimensions), for example "chest" for a person, "inseam" for pants, "gauge" for screws, or "wheel" for bicycles.
 *
 * @author schema.org
 * @class MeasurementTypeEnumeration
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class MeasurementTypeEnumeration extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MeasurementTypeEnumeration");
	}

}