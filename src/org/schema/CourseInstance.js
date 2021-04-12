/**
 * Schema.org/CourseInstance
 * An instance of a [[Course]] which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students.
 *
 * @author schema.org
 * @class CourseInstance
 * @module org.schema
 */
public class CourseInstance extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CourseInstance";
	}

}