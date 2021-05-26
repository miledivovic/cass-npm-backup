const schema = {};
schema.PlayAction = require("./PlayAction.js");
/**
 * Schema.org/ExerciseAction
 * The act of participating in exertive activity for the purposes of improving health and fitness.
 *
 * @author schema.org
 * @class ExerciseAction
 * @module org.schema
 * @extends PlayAction
 */
module.exports = class ExerciseAction extends schema.PlayAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ExerciseAction");
	}

	/**
	 * Schema.org/exerciseCourse
	 * A sub property of location. The course where this action was taken.
	 *
	 * @property exerciseCourse
	 * @type Place
	 */
	exerciseCourse;

	/**
	 * Schema.org/fromLocation
	 * A sub property of location. The original location of the object or the agent before the action.
	 *
	 * @property fromLocation
	 * @type Place
	 */
	fromLocation;

	/**
	 * Schema.org/exerciseType
	 * Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc.
	 *
	 * @property exerciseType
	 * @type Text
	 */
	exerciseType;

	/**
	 * Schema.org/sportsEvent
	 * A sub property of location. The sports event where this action occurred.
	 *
	 * @property sportsEvent
	 * @type SportsEvent
	 */
	sportsEvent;

	/**
	 * Schema.org/sportsTeam
	 * A sub property of participant. The sports team that participated on this action.
	 *
	 * @property sportsTeam
	 * @type SportsTeam
	 */
	sportsTeam;

	/**
	 * Schema.org/course
	 * A sub property of location. The course where this action was taken.
	 *
	 * @property course
	 * @type Place
	 */
	course;

	/**
	 * Schema.org/diet
	 * A sub property of instrument. The diet used in this action.
	 *
	 * @property diet
	 * @type Diet
	 */
	diet;

	/**
	 * Schema.org/sportsActivityLocation
	 * A sub property of location. The sports activity location where this action occurred.
	 *
	 * @property sportsActivityLocation
	 * @type SportsActivityLocation
	 */
	sportsActivityLocation;

	/**
	 * Schema.org/opponent
	 * A sub property of participant. The opponent on this action.
	 *
	 * @property opponent
	 * @type Person
	 */
	opponent;

	/**
	 * Schema.org/distance
	 * The distance travelled, e.g. exercising or travelling.
	 *
	 * @property distance
	 * @type Distance
	 */
	distance;

	/**
	 * Schema.org/exerciseRelatedDiet
	 * A sub property of instrument. The diet used in this action.
	 *
	 * @property exerciseRelatedDiet
	 * @type Diet
	 */
	exerciseRelatedDiet;

	/**
	 * Schema.org/exercisePlan
	 * A sub property of instrument. The exercise plan used on this action.
	 *
	 * @property exercisePlan
	 * @type ExercisePlan
	 */
	exercisePlan;

	/**
	 * Schema.org/toLocation
	 * A sub property of location. The final location of the object or the agent after the action.
	 *
	 * @property toLocation
	 * @type Place
	 */
	toLocation;

}