/**
 * credentialengine.org/DurationProfile
 * Entity describing the temporal aspects of a resource.
 * Temporal aspects include exact, minimum, and maximum timeframes of an activity.
 * @author credentialengine.org
 * @class DurationProfile
 * @module org.credentialengine
 */
module.exports = class DurationProfile extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor() {
		super("http://schema.eduworks.com/simpleCtdl", "DurationProfile");
	}

	/**
	 * http://purl.org/ctdl/terms/description
	 * Statement, characterization or account of the entity.
	 * @property description
	 * @type langString
	 */
	description;

	/**
	 * http://purl.org/ctdl/terms/exactDuration
	 * Exact period of time of an activity or event.
	 * @property exactDuration
	 * @type Duration
	 */
	exactDuration;

	/**
	 * http://purl.org/ctdl/terms/maximumDuration
	 * Maximum amount of time it will take to complete the activity.
	 * The value of ceterms:maximumDuration denotes an approximation of duration.
	 * @property maximumDuration
	 * @type Duration
	 */
	maximumDuration;

	/**
	 * http://purl.org/ctdl/terms/minimumDuration
	 * Minimum amount of time it will take to complete the activity.
	 * The value of ceterms:minimumDuration denotes an approximation of duration.
	 * @property minimumDuration
	 * @type Duration
	 */
	minimumDuration;
};
