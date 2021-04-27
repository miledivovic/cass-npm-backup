/**
 * Schema.org/GolfCourse
 * A golf course.
 *
 * @author schema.org
 * @class GolfCourse
 * @module org.schema
 */
module.exports = class GolfCourse extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "GolfCourse");
	}
};
