const schema = {};
schema.CreateAction = require("./CreateAction.js");
/**
 * Schema.org/DrawAction
 * The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instruments.
 *
 * @author schema.org
 * @class DrawAction
 * @module org.schema
 * @extends CreateAction
 */
module.exports = class DrawAction extends schema.CreateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DrawAction");
	}

}