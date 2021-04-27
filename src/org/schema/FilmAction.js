/**
 * Schema.org/FilmAction
 * The act of capturing sound and moving images on film, video, or digitally.
 *
 * @author schema.org
 * @class FilmAction
 * @module org.schema
 */
module.exports = class FilmAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "FilmAction");
	}
};
