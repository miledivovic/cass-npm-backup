const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/TrainStation
 * A train station.
 *
 * @author schema.org
 * @class TrainStation
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class TrainStation extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TrainStation");
	}

}