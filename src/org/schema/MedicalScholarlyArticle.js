/**
 * Schema.org/MedicalScholarlyArticle
 * A scholarly article in the medical domain.
 *
 * @author schema.org
 * @class MedicalScholarlyArticle
 * @module org.schema
 */
public class MedicalScholarlyArticle extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalScholarlyArticle";
	}

}