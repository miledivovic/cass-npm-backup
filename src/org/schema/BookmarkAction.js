/**
 * Schema.org/BookmarkAction
 * An agent bookmarks/flags/labels/tags/marks an object.
 *
 * @author schema.org
 * @class BookmarkAction
 * @module org.schema
 */
module.exports = class BookmarkAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BookmarkAction");
	}

}