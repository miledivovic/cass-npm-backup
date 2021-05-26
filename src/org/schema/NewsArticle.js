const schema = {};
schema.Article = require("./Article.js");
/**
 * Schema.org/NewsArticle
 * A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.

A more detailed overview of [schema.org News markup](/docs/news.html) is also available.

 *
 * @author schema.org
 * @class NewsArticle
 * @module org.schema
 * @extends Article
 */
module.exports = class NewsArticle extends schema.Article {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","NewsArticle");
	}

	/**
	 * Schema.org/printSection
	 * If this NewsArticle appears in print, this field indicates the print section in which the article appeared.
	 *
	 * @property printSection
	 * @type Text
	 */
	printSection;

	/**
	 * Schema.org/printPage
	 * If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18).
	 *
	 * @property printPage
	 * @type Text
	 */
	printPage;

	/**
	 * Schema.org/dateline
	 * A [dateline](https://en.wikipedia.org/wiki/Dateline) is a brief piece of text included in news articles that describes where and when the story was written or filed though the date is often omitted. Sometimes only a placename is provided.

Structured representations of dateline-related information can also be expressed more explicitly using [[locationCreated]] (which represents where a work was created e.g. where a news report was written).  For location depicted or described in the content, use [[contentLocation]].

Dateline summaries are oriented more towards human readers than towards automated processing, and can vary substantially. Some examples: "BEIRUT, Lebanon, June 2.", "Paris, France", "December 19, 2017 11:43AM Reporting from Washington", "Beijing/Moscow", "QUEZON CITY, Philippines".
      
	 *
	 * @property dateline
	 * @type Text
	 */
	dateline;

	/**
	 * Schema.org/printEdition
	 * The edition of the print product in which the NewsArticle appears.
	 *
	 * @property printEdition
	 * @type Text
	 */
	printEdition;

	/**
	 * Schema.org/printColumn
	 * The number of the column in which the NewsArticle appears in the print edition.
	 *
	 * @property printColumn
	 * @type Text
	 */
	printColumn;

}