/**
 * Schema.org/DataFeedItem
 * A single item within a larger data feed.
 *
 * @author schema.org
 * @class DataFeedItem
 * @module org.schema
 */
public class DataFeedItem extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DataFeedItem";
	}

}