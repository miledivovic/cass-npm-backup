const schema = {};
schema.AudioObject = require("./AudioObject.js");
/**
 * Schema.org/Audiobook
 * An audiobook.
 *
 * @author schema.org
 * @class Audiobook
 * @module org.schema
 * @extends AudioObject
 */
module.exports = class Audiobook extends schema.AudioObject {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Audiobook");
	}

	/**
	 * Schema.org/readBy
	 * A person who reads (performs) the audiobook.
	 *
	 * @property readBy
	 * @type Person
	 */
	readBy;

	/**
	 * Schema.org/duration
	 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
	 *
	 * @property duration
	 * @type Duration
	 */
	duration;

}