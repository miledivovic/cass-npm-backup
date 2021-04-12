/**
 * Schema.org/EducationalOrganization
 * An educational organization.
 *
 * @author schema.org
 * @class EducationalOrganization
 * @module org.schema
 * @extends CivicStructure
 */
public class EducationalOrganization extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EducationalOrganization";
	}

}