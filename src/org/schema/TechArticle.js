/**
 * Schema.org/TechArticle
 * A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.
 *
 * @author schema.org
 * @class TechArticle
 * @module org.schema
 */
public class TechArticle extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TechArticle";
	}

}