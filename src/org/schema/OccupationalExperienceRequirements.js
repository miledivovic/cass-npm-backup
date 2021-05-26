const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/OccupationalExperienceRequirements
 * Indicates employment-related experience requirements, e.g. [[monthsOfExperience]].
 *
 * @author schema.org
 * @class OccupationalExperienceRequirements
 * @module org.schema
 * @extends Intangible
 */
module.exports = class OccupationalExperienceRequirements extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OccupationalExperienceRequirements");
	}

	/**
	 * Schema.org/monthsOfExperience
	 * Indicates the minimal number of months of experience required for a position.
	 *
	 * @property monthsOfExperience
	 * @type Number
	 */
	monthsOfExperience;

}