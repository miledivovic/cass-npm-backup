const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Occupation
 * A profession, may involve prolonged training and/or a formal qualification.
 *
 * @author schema.org
 * @class Occupation
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Occupation extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Occupation");
	}

	/**
	 * Schema.org/educationRequirements
	 * Educational background needed for the position or Occupation.
	 *
	 * @property educationRequirements
	 * @type Text
	 */
	educationRequirements;

	/**
	 * Schema.org/skills
	 * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation.
	 *
	 * @property skills
	 * @type DefinedTerm
	 */
	skills;

	/**
	 * Schema.org/estimatedSalary
	 * An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value.
	 *
	 * @property estimatedSalary
	 * @type MonetaryAmount
	 */
	estimatedSalary;

	/**
	 * Schema.org/responsibilities
	 * Responsibilities associated with this role or Occupation.
	 *
	 * @property responsibilities
	 * @type Text
	 */
	responsibilities;

	/**
	 * Schema.org/occupationalCategory
	 * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
	 *
	 * @property occupationalCategory
	 * @type CategoryCode
	 */
	occupationalCategory;

	/**
	 * Schema.org/occupationLocation
	 *  The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions.
	 *
	 * @property occupationLocation
	 * @type AdministrativeArea
	 */
	occupationLocation;

	/**
	 * Schema.org/qualifications
	 * Specific qualifications required for this role or Occupation.
	 *
	 * @property qualifications
	 * @type EducationalOccupationalCredential
	 */
	qualifications;

	/**
	 * Schema.org/experienceRequirements
	 * Description of skills and experience needed for the position or Occupation.
	 *
	 * @property experienceRequirements
	 * @type Text
	 */
	experienceRequirements;

}