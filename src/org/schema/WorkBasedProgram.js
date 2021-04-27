/**
 * Schema.org/WorkBasedProgram
 * A program with both an educational and employment component. Typically based at a workplace and structured around work-based learning, with the aim of instilling competencies related to an occupation. WorkBasedProgram is used to distinguish programs such as apprenticeships from school, college or other classroom based educational programs.
 *
 * @author schema.org
 * @class WorkBasedProgram
 * @module org.schema
 */
module.exports = class WorkBasedProgram extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "WorkBasedProgram");
	}
};
