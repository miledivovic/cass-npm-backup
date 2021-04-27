/**
 * Schema.org/MedicalImagingTechnique
 * Any medical imaging modality typically used for diagnostic purposes. Enumerated type.
 *
 * @author schema.org
 * @class MedicalImagingTechnique
 * @module org.schema
 */
module.exports = class MedicalImagingTechnique extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MedicalImagingTechnique");
	}
};
