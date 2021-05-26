const schema = {};
schema.BroadcastService = require("./BroadcastService.js");
/**
 * Schema.org/RadioBroadcastService
 * A delivery service through which radio content is provided via broadcast over the air or online.
 *
 * @author schema.org
 * @class RadioBroadcastService
 * @module org.schema
 * @extends BroadcastService
 */
module.exports = class RadioBroadcastService extends schema.BroadcastService {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RadioBroadcastService");
	}

}