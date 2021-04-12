/**
 * Schema.org/ScholarlyArticle
 * A scholarly article.
 *
 * @author schema.org
 * @class ScholarlyArticle
 * @module org.schema
 */
public class ScholarlyArticle extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ScholarlyArticle";
	}

}