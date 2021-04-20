/**
 * Schema.org/MedicalScholarlyArticle
 * A scholarly article in the medical domain.
 *
 * @author schema.org
 * @class MedicalScholarlyArticle
 * @module org.schema
 */
module.exports = class MedicalScholarlyArticle extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalScholarlyArticle");
	}

}