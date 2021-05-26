const schema = {};
schema.SportsActivityLocation = require("./SportsActivityLocation.js");
/**
 * Schema.org/GolfCourse
 * A golf course.
 *
 * @author schema.org
 * @class GolfCourse
 * @module org.schema
 * @extends SportsActivityLocation
 */
module.exports = class GolfCourse extends schema.SportsActivityLocation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GolfCourse");
	}

}