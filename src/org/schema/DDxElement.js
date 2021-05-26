const schema = {};
schema.MedicalIntangible = require("./MedicalIntangible.js");
/**
 * Schema.org/DDxElement
 * An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it.
 *
 * @author schema.org
 * @class DDxElement
 * @module org.schema
 * @extends MedicalIntangible
 */
module.exports = class DDxElement extends schema.MedicalIntangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DDxElement");
	}

	/**
	 * Schema.org/distinguishingSign
	 * One of a set of signs and symptoms that can be used to distinguish this diagnosis from others in the differential diagnosis.
	 *
	 * @property distinguishingSign
	 * @type MedicalSignOrSymptom
	 */
	distinguishingSign;

	/**
	 * Schema.org/diagnosis
	 * One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process.
	 *
	 * @property diagnosis
	 * @type MedicalCondition
	 */
	diagnosis;

}