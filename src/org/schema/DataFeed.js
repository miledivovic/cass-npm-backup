/**
 * Schema.org/DataFeed
 * A single feed providing structured information about one or more entities or topics.
 *
 * @author schema.org
 * @class DataFeed
 * @module org.schema
 */
module.exports = class DataFeed extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "DataFeed");
	}
};
