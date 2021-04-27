/**
 * Schema.org/MobilePhoneStore
 * A store that sells mobile phones and related accessories.
 *
 * @author schema.org
 * @class MobilePhoneStore
 * @module org.schema
 */
module.exports = class MobilePhoneStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MobilePhoneStore");
	}
};
