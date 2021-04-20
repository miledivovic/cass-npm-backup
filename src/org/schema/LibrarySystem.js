/**
 * Schema.org/LibrarySystem
 * A [[LibrarySystem]] is a collaborative system amongst several libraries.
 *
 * @author schema.org
 * @class LibrarySystem
 * @module org.schema
 */
module.exports = class LibrarySystem extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LibrarySystem");
	}

}