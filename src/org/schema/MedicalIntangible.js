/**
 * Schema.org/MedicalIntangible
 * A utility class that serves as the umbrella for a number of 'intangible' things in the medical space.
 *
 * @author schema.org
 * @class MedicalIntangible
 * @module org.schema
 */
module.exports = class MedicalIntangible extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MedicalIntangible");
	}
};
