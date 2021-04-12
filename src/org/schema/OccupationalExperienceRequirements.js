/**
 * Schema.org/OccupationalExperienceRequirements
 * Indicates employment-related experience requirements, e.g. [[monthsOfExperience]].
 *
 * @author schema.org
 * @class OccupationalExperienceRequirements
 * @module org.schema
 */
public class OccupationalExperienceRequirements extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "OccupationalExperienceRequirements";
	}

}