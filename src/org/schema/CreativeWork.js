/**
 * Schema.org/CreativeWork
 * The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 *
 * @author schema.org
 * @class CreativeWork
 * @module org.schema
 */
module.exports = class CreativeWork extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "CreativeWork");
	}
};
