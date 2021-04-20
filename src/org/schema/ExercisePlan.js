global.schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/ExercisePlan
 * Fitness-related activity designed for a specific health-related purpose, including defined exercise routines as well as activity prescribed by a clinician.
 *
 * @author schema.org
 * @class ExercisePlan
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class ExercisePlan extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ExercisePlan");
	}

}