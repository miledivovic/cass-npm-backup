const schema = {};
schema.CreateAction = require("./CreateAction.js");
/**
 * Schema.org/FilmAction
 * The act of capturing sound and moving images on film, video, or digitally.
 *
 * @author schema.org
 * @class FilmAction
 * @module org.schema
 * @extends CreateAction
 */
module.exports = class FilmAction extends schema.CreateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FilmAction");
	}

}