/**
 * Schema.org/GolfCourse
 * A golf course.
 *
 * @author schema.org
 * @class GolfCourse
 * @module org.schema
 */
public class GolfCourse extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "GolfCourse";
	}

}