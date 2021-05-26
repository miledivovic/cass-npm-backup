const schema = {};
schema.RadioChannel = require("./RadioChannel.js");
/**
 * Schema.org/AMRadioChannel
 * A radio channel that uses AM.
 *
 * @author schema.org
 * @class AMRadioChannel
 * @module org.schema
 * @extends RadioChannel
 */
module.exports = class AMRadioChannel extends schema.RadioChannel {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AMRadioChannel");
	}

}