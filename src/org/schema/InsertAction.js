const schema = {};
schema.AddAction = require("./AddAction.js");
/**
 * Schema.org/InsertAction
 * The act of adding at a specific location in an ordered collection.
 *
 * @author schema.org
 * @class InsertAction
 * @module org.schema
 * @extends AddAction
 */
module.exports = class InsertAction extends schema.AddAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InsertAction");
	}

	/**
	 * Schema.org/toLocation
	 * A sub property of location. The final location of the object or the agent after the action.
	 *
	 * @property toLocation
	 * @type Place
	 */
	toLocation;

}