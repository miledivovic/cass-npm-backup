const schema = {};
schema.InsertAction = require("./InsertAction.js");
/**
 * Schema.org/PrependAction
 * The act of inserting at the beginning if an ordered collection.
 *
 * @author schema.org
 * @class PrependAction
 * @module org.schema
 * @extends InsertAction
 */
module.exports = class PrependAction extends schema.InsertAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PrependAction");
	}

}