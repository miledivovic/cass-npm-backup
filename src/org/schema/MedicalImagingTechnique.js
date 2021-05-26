const schema = {};
schema.MedicalEnumeration = require("./MedicalEnumeration.js");
/**
 * Schema.org/MedicalImagingTechnique
 * Any medical imaging modality typically used for diagnostic purposes. Enumerated type.
 *
 * @author schema.org
 * @class MedicalImagingTechnique
 * @module org.schema
 * @extends MedicalEnumeration
 */
module.exports = class MedicalImagingTechnique extends schema.MedicalEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalImagingTechnique");
	}

}