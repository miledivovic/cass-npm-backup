/**
 * Schema.org/NightClub
 * A nightclub or discotheque.
 *
 * @author schema.org
 * @class NightClub
 * @module org.schema
 */
module.exports = class NightClub extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","NightClub");
	}

}