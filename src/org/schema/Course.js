const schema = {};
schema.LearningResource = require("./LearningResource.js");
/**
 * Schema.org/Course
 * A description of an educational course which may be offered as distinct instances at which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners.
 *
 * @author schema.org
 * @class Course
 * @module org.schema
 * @extends LearningResource
 */
module.exports = class Course extends schema.LearningResource {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Course");
	}

	/**
	 * Schema.org/coursePrerequisites
	 * Requirements for taking the Course. May be completion of another [[Course]] or a textual description like "permission of instructor". Requirements may be a pre-requisite competency, referenced using [[AlignmentObject]].
	 *
	 * @property coursePrerequisites
	 * @type Course
	 */
	coursePrerequisites;

	/**
	 * Schema.org/hasCourseInstance
	 * An offering of the course at a specific time and place or through specific media or mode of study or to a specific section of students.
	 *
	 * @property hasCourseInstance
	 * @type CourseInstance
	 */
	hasCourseInstance;

	/**
	 * Schema.org/courseCode
	 * The identifier for the [[Course]] used by the course [[provider]] (e.g. CS101 or 6.001).
	 *
	 * @property courseCode
	 * @type Text
	 */
	courseCode;

	/**
	 * Schema.org/occupationalCredentialAwarded
	 * A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program.
	 *
	 * @property occupationalCredentialAwarded
	 * @type URL
	 */
	occupationalCredentialAwarded;

	/**
	 * Schema.org/numberOfCredits
	 * The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram.
	 *
	 * @property numberOfCredits
	 * @type StructuredValue
	 */
	numberOfCredits;

	/**
	 * Schema.org/educationalCredentialAwarded
	 * A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program.
	 *
	 * @property educationalCredentialAwarded
	 * @type URL
	 */
	educationalCredentialAwarded;

}