/**
 * Schema.org/EducationalOccupationalCredential
 * An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that may be awarded to a person or other entity that meets the requirements defined by the credentialer.
 *
 * @author schema.org
 * @class EducationalOccupationalCredential
 * @module org.schema
 */
module.exports = class EducationalOccupationalCredential extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EducationalOccupationalCredential";
	}

}