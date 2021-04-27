/**
 * Schema.org/DataFeedItem
 * A single item within a larger data feed.
 *
 * @author schema.org
 * @class DataFeedItem
 * @module org.schema
 */
module.exports = class DataFeedItem extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "DataFeedItem");
	}
};
