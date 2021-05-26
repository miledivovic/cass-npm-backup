const schema = {};
schema.InsertAction = require("./InsertAction.js");
/**
 * Schema.org/AppendAction
 * The act of inserting at the end if an ordered collection.
 *
 * @author schema.org
 * @class AppendAction
 * @module org.schema
 * @extends InsertAction
 */
module.exports = class AppendAction extends schema.InsertAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AppendAction");
	}

}