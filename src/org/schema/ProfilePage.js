/**
 * Schema.org/ProfilePage
 * Web page type: Profile page.
 *
 * @author schema.org
 * @class ProfilePage
 * @module org.schema
 */
module.exports = class ProfilePage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ProfilePage");
	}

}