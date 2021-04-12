/**
 * Schema.org/ExerciseGym
 * A gym.
 *
 * @author schema.org
 * @class ExerciseGym
 * @module org.schema
 */
module.exports = class ExerciseGym extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ExerciseGym";
	}

}