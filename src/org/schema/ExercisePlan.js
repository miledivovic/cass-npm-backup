const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
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

	/**
	 * Schema.org/exerciseType
	 * Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc.
	 *
	 * @property exerciseType
	 * @type Text
	 */
	exerciseType;

	/**
	 * Schema.org/additionalVariable
	 * Any additional component of the exercise prescription that may need to be articulated to the patient. This may include the order of exercises, the number of repetitions of movement, quantitative distance, progressions over time, etc.
	 *
	 * @property additionalVariable
	 * @type Text
	 */
	additionalVariable;

	/**
	 * Schema.org/workload
	 * Quantitative measure of the physiologic output of the exercise; also referred to as energy expenditure.
	 *
	 * @property workload
	 * @type Energy
	 */
	workload;

	/**
	 * Schema.org/activityFrequency
	 * How often one should engage in the activity.
	 *
	 * @property activityFrequency
	 * @type Text
	 */
	activityFrequency;

	/**
	 * Schema.org/intensity
	 * Quantitative measure gauging the degree of force involved in the exercise, for example, heartbeats per minute. May include the velocity of the movement.
	 *
	 * @property intensity
	 * @type Text
	 */
	intensity;

	/**
	 * Schema.org/repetitions
	 * Number of times one should repeat the activity.
	 *
	 * @property repetitions
	 * @type QuantitativeValue
	 */
	repetitions;

	/**
	 * Schema.org/activityDuration
	 * Length of time to engage in the activity.
	 *
	 * @property activityDuration
	 * @type Duration
	 */
	activityDuration;

	/**
	 * Schema.org/restPeriods
	 * How often one should break from the activity.
	 *
	 * @property restPeriods
	 * @type Text
	 */
	restPeriods;

}