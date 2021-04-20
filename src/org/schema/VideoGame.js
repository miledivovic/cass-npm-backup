global.schema.SoftwareApplication = require("./SoftwareApplication.js");
/**
 * Schema.org/VideoGame
 * A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device.
 *
 * @author schema.org
 * @class VideoGame
 * @module org.schema
 * @extends SoftwareApplication
 */
module.exports = class VideoGame extends schema.SoftwareApplication {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","VideoGame");
	}

}