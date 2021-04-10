/**
 *  Schema.org/ExerciseAction
 *  The act of participating in exertive activity for the purposes of improving health and fitness.
 * 
 *  @author schema.org
 *  @class ExerciseAction
 *  @module org.schema
 *  @extends PlayAction
 */
var ExerciseAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    PlayAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ExerciseAction";
};
ExerciseAction = stjs.extend(ExerciseAction, PlayAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/course
     *  A sub property of location. The course where this action was taken.
     * 
     *  @property course
     *  @type Place
     */
    course = null;
    /**
     *  Schema.org/sportsTeam
     *  A sub property of participant. The sports team that participated on this action.
     * 
     *  @property sportsTeam
     *  @type SportsTeam
     */
    sportsTeam = null;
    /**
     *  Schema.org/sportsEvent
     *  A sub property of location. The sports event where this action occurred.
     * 
     *  @property sportsEvent
     *  @type SportsEvent
     */
    sportsEvent = null;
    /**
     *  Schema.org/distance
     *  The distance travelled, e.g. exercising or travelling.
     * 
     *  @property distance
     *  @type Distance
     */
    distance = null;
    /**
     *  Schema.org/opponent
     *  A sub property of participant. The opponent on this action.
     * 
     *  @property opponent
     *  @type Person
     */
    opponent = null;
    /**
     *  Schema.org/sportsActivityLocation
     *  A sub property of location. The sports activity location where this action occurred.
     * 
     *  @property sportsActivityLocation
     *  @type SportsActivityLocation
     */
    sportsActivityLocation = null;
    /**
     *  Schema.org/toLocation
     *  A sub property of location. The final location of the object or the agent after the action.
     * 
     *  @property toLocation
     *  @type Place
     */
    toLocation = null;
    /**
     *  Schema.org/fromLocation
     *  A sub property of location. The original location of the object or the agent before the action.
     * 
     *  @property fromLocation
     *  @type Place
     */
    fromLocation = null;
    /**
     *  Schema.org/exerciseCourse
     *  A sub property of location. The course where this action was taken.
     * 
     *  @property exerciseCourse
     *  @type Place
     */
    exerciseCourse = null;
}, {course: "Place", sportsTeam: "SportsTeam", sportsEvent: "SportsEvent", distance: "Distance", opponent: "Person", sportsActivityLocation: "SportsActivityLocation", toLocation: "Place", fromLocation: "Place", exerciseCourse: "Place", audience: "Audience", event: "SchemaEvent", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
