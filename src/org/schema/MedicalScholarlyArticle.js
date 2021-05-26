const schema = {};
schema.ScholarlyArticle = require("./ScholarlyArticle.js");
/**
 * Schema.org/MedicalScholarlyArticle
 * A scholarly article in the medical domain.
 *
 * @author schema.org
 * @class MedicalScholarlyArticle
 * @module org.schema
 * @extends ScholarlyArticle
 */
module.exports = class MedicalScholarlyArticle extends schema.ScholarlyArticle {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalScholarlyArticle");
	}

	/**
	 * Schema.org/publicationType
	 * The type of the medical article, taken from the US NLM MeSH publication type catalog. See also [MeSH documentation](http://www.nlm.nih.gov/mesh/pubtypes.html).
	 *
	 * @property publicationType
	 * @type Text
	 */
	publicationType;

}