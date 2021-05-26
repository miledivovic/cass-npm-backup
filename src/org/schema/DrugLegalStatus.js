const schema = {};
schema.MedicalIntangible = require("./MedicalIntangible.js");
/**
 * Schema.org/DrugLegalStatus
 * The legal availability status of a medical drug.
 *
 * @author schema.org
 * @class DrugLegalStatus
 * @module org.schema
 * @extends MedicalIntangible
 */
module.exports = class DrugLegalStatus extends schema.MedicalIntangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DrugLegalStatus");
	}

	/**
	 * Schema.org/applicableLocation
	 * The location in which the status applies.
	 *
	 * @property applicableLocation
	 * @type AdministrativeArea
	 */
	applicableLocation;

}