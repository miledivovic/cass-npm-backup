/**
 * Schema.org/BookmarkAction
 * An agent bookmarks/flags/labels/tags/marks an object.
 *
 * @author schema.org
 * @class BookmarkAction
 * @module org.schema
 */
public class BookmarkAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BookmarkAction";
	}

}