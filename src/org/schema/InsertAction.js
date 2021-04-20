/**
 * Schema.org/InsertAction
 * The act of adding at a specific location in an ordered collection.
 *
 * @author schema.org
 * @class InsertAction
 * @module org.schema
 */
module.exports = class InsertAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InsertAction");
	}

}