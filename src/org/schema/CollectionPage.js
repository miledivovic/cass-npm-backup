/**
 * Schema.org/CollectionPage
 * Web page type: Collection page.
 *
 * @author schema.org
 * @class CollectionPage
 * @module org.schema
 */
module.exports = class CollectionPage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "CollectionPage");
	}
};
