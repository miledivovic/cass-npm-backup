const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/EducationalOccupationalCredential
 * An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that may be awarded to a person or other entity that meets the requirements defined by the credentialer.
 *
 * @author schema.org
 * @class EducationalOccupationalCredential
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class EducationalOccupationalCredential extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EducationalOccupationalCredential");
	}

	/**
	 * Schema.org/credentialCategory
	 * The category or type of credential being described, for example "degree”, “certificate”, “badge”, or more specific term.
	 *
	 * @property credentialCategory
	 * @type Text
	 */
	credentialCategory;

	/**
	 * Schema.org/educationalLevel
	 * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
	 *
	 * @property educationalLevel
	 * @type Text
	 */
	educationalLevel;

	/**
	 * Schema.org/validIn
	 * The geographic area where a permit or similar thing is valid.
	 *
	 * @property validIn
	 * @type AdministrativeArea
	 */
	validIn;

	/**
	 * Schema.org/competencyRequired
	 * Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource.
	 *
	 * @property competencyRequired
	 * @type Text
	 */
	competencyRequired;

	/**
	 * Schema.org/recognizedBy
	 * An organization that acknowledges the validity, value or utility of a credential. Note: recognition may include a process of quality assurance or accreditation.
	 *
	 * @property recognizedBy
	 * @type Organization
	 */
	recognizedBy;

	/**
	 * Schema.org/validFor
	 * The duration of validity of a permit or similar thing.
	 *
	 * @property validFor
	 * @type Duration
	 */
	validFor;

}