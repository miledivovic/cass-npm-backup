const schema = {};
schema.RadioChannel = require("./RadioChannel.js");
/**
 * Schema.org/FMRadioChannel
 * A radio channel that uses FM.
 *
 * @author schema.org
 * @class FMRadioChannel
 * @module org.schema
 * @extends RadioChannel
 */
module.exports = class FMRadioChannel extends schema.RadioChannel {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FMRadioChannel");
	}

}