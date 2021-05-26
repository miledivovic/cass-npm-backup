const schema = {};
schema.MeasurementTypeEnumeration = require("./MeasurementTypeEnumeration.js");
/**
 * Schema.org/BodyMeasurementTypeEnumeration
 * Enumerates types (or dimensions) of a person's body measurements, for example for fitting of clothes.
 *
 * @author schema.org
 * @class BodyMeasurementTypeEnumeration
 * @module org.schema
 * @extends MeasurementTypeEnumeration
 */
module.exports = class BodyMeasurementTypeEnumeration extends schema.MeasurementTypeEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BodyMeasurementTypeEnumeration");
	}

}