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
		context = "http://schema.org/";
		type = "ProfilePage";
	}

}