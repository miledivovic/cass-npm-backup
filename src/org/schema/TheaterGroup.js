const schema = {};
schema.PerformingGroup = require("./PerformingGroup.js");
/**
 * Schema.org/TheaterGroup
 * A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre.
 *
 * @author schema.org
 * @class TheaterGroup
 * @module org.schema
 * @extends PerformingGroup
 */
module.exports = class TheaterGroup extends schema.PerformingGroup {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TheaterGroup");
	}

}