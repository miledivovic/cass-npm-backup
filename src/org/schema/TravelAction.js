const schema = {};
schema.MoveAction = require("./MoveAction.js");
/**
 * Schema.org/TravelAction
 * The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants.
 *
 * @author schema.org
 * @class TravelAction
 * @module org.schema
 * @extends MoveAction
 */
module.exports = class TravelAction extends schema.MoveAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TravelAction");
	}

	/**
	 * Schema.org/distance
	 * The distance travelled, e.g. exercising or travelling.
	 *
	 * @property distance
	 * @type Distance
	 */
	distance;

}