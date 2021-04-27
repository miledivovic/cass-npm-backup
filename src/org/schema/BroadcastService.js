/**
 * Schema.org/BroadcastService
 * A delivery service through which content is provided via broadcast over the air or online.
 *
 * @author schema.org
 * @class BroadcastService
 * @module org.schema
 */
module.exports = class BroadcastService extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "BroadcastService");
	}
};
