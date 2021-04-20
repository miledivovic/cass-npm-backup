/**
 * Schema.org/ExerciseAction
 * The act of participating in exertive activity for the purposes of improving health and fitness.
 *
 * @author schema.org
 * @class ExerciseAction
 * @module org.schema
 */
module.exports = class ExerciseAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ExerciseAction");
	}

}