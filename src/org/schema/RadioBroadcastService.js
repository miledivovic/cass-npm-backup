/**
 * Schema.org/RadioBroadcastService
 * A delivery service through which radio content is provided via broadcast over the air or online.
 *
 * @author schema.org
 * @class RadioBroadcastService
 * @module org.schema
 */
module.exports = class RadioBroadcastService extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "RadioBroadcastService");
	}
};
