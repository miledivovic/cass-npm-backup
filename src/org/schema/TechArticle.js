const schema = {};
schema.Article = require("./Article.js");
/**
 * Schema.org/TechArticle
 * A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.
 *
 * @author schema.org
 * @class TechArticle
 * @module org.schema
 * @extends Article
 */
module.exports = class TechArticle extends schema.Article {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TechArticle");
	}

	/**
	 * Schema.org/proficiencyLevel
	 * Proficiency needed for this content; expected values: 'Beginner', 'Expert'.
	 *
	 * @property proficiencyLevel
	 * @type Text
	 */
	proficiencyLevel;

	/**
	 * Schema.org/dependencies
	 * Prerequisites needed to fulfill steps in article.
	 *
	 * @property dependencies
	 * @type Text
	 */
	dependencies;

}