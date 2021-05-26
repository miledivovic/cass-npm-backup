const schema = {};
schema.PerformingGroup = require("./PerformingGroup.js");
/**
 * Schema.org/DanceGroup
 * A dance group&#x2014;for example, the Alvin Ailey Dance Theater or Riverdance.
 *
 * @author schema.org
 * @class DanceGroup
 * @module org.schema
 * @extends PerformingGroup
 */
module.exports = class DanceGroup extends schema.PerformingGroup {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DanceGroup");
	}

}