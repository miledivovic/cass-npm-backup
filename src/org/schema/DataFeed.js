const schema = {};
schema.Dataset = require("./Dataset.js");
/**
 * Schema.org/DataFeed
 * A single feed providing structured information about one or more entities or topics.
 *
 * @author schema.org
 * @class DataFeed
 * @module org.schema
 * @extends Dataset
 */
module.exports = class DataFeed extends schema.Dataset {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DataFeed");
	}

	/**
	 * Schema.org/dataFeedElement
	 * An item within in a data feed. Data feeds may have many elements.
	 *
	 * @property dataFeedElement
	 * @type Text
	 */
	dataFeedElement;

}