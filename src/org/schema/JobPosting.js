const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/JobPosting
 * A listing that describes a job opening in a certain organization.
 *
 * @author schema.org
 * @class JobPosting
 * @module org.schema
 * @extends Intangible
 */
module.exports = class JobPosting extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","JobPosting");
	}

	/**
	 * Schema.org/applicationContact
	 * Contact details for further information relevant to this job posting.
	 *
	 * @property applicationContact
	 * @type ContactPoint
	 */
	applicationContact;

	/**
	 * Schema.org/employerOverview
	 * A description of the employer, career opportunities and work environment for this position.
	 *
	 * @property employerOverview
	 * @type Text
	 */
	employerOverview;

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
	 * Schema.org/employmentType
	 * Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).
	 *
	 * @property employmentType
	 * @type Text
	 */
	employmentType;

	/**
	 * Schema.org/hiringOrganization
	 * Organization offering the job position.
	 *
	 * @property hiringOrganization
	 * @type Organization
	 */
	hiringOrganization;

	/**
	 * Schema.org/sensoryRequirement
	 * A description of any sensory requirements and levels necessary to function on the job, including hearing and vision. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term.
	 *
	 * @property sensoryRequirement
	 * @type DefinedTerm
	 */
	sensoryRequirement;

	/**
	 * Schema.org/industry
	 * The industry associated with the job position.
	 *
	 * @property industry
	 * @type Text
	 */
	industry;

	/**
	 * Schema.org/jobStartDate
	 * The date on which a successful applicant for this job would be expected to start work. Choose a specific date in the future or use the jobImmediateStart property to indicate the position is to be filled as soon as possible.
	 *
	 * @property jobStartDate
	 * @type Date
	 */
	jobStartDate;

	/**
	 * Schema.org/jobImmediateStart
	 * An indicator as to whether a position is available for an immediate start.
	 *
	 * @property jobImmediateStart
	 * @type Boolean
	 */
	jobImmediateStart;

	/**
	 * Schema.org/employmentUnit
	 * Indicates the department, unit and/or facility where the employee reports and/or in which the job is to be performed.
	 *
	 * @property employmentUnit
	 * @type Organization
	 */
	employmentUnit;

	/**
	 * Schema.org/securityClearanceRequirement
	 * A description of any security clearance requirements of the job.
	 *
	 * @property securityClearanceRequirement
	 * @type URL
	 */
	securityClearanceRequirement;

	/**
	 * Schema.org/responsibilities
	 * Responsibilities associated with this role or Occupation.
	 *
	 * @property responsibilities
	 * @type Text
	 */
	responsibilities;

	/**
	 * Schema.org/jobBenefits
	 * Description of benefits associated with the job.
	 *
	 * @property jobBenefits
	 * @type Text
	 */
	jobBenefits;

	/**
	 * Schema.org/jobLocation
	 * A (typically single) geographic location associated with the job position.
	 *
	 * @property jobLocation
	 * @type Place
	 */
	jobLocation;

	/**
	 * Schema.org/applicantLocationRequirements
	 * The location(s) applicants can apply from. This is usually used for telecommuting jobs where the applicant does not need to be in a physical office. Note: This should not be used for citizenship or work visa requirements.
	 *
	 * @property applicantLocationRequirements
	 * @type AdministrativeArea
	 */
	applicantLocationRequirements;

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
	 * Schema.org/qualifications
	 * Specific qualifications required for this role or Occupation.
	 *
	 * @property qualifications
	 * @type EducationalOccupationalCredential
	 */
	qualifications;

	/**
	 * Schema.org/jobLocationType
	 * A description of the job location (e.g TELECOMMUTE for telecommute jobs).
	 *
	 * @property jobLocationType
	 * @type Text
	 */
	jobLocationType;

	/**
	 * Schema.org/relevantOccupation
	 * The Occupation for the JobPosting.
	 *
	 * @property relevantOccupation
	 * @type Occupation
	 */
	relevantOccupation;

	/**
	 * Schema.org/incentiveCompensation
	 * Description of bonus and commission compensation aspects of the job.
	 *
	 * @property incentiveCompensation
	 * @type Text
	 */
	incentiveCompensation;

	/**
	 * Schema.org/datePosted
	 * Publication date of an online listing.
	 *
	 * @property datePosted
	 * @type Date
	 */
	datePosted;

	/**
	 * Schema.org/physicalRequirement
	 * A description of the types of physical activity associated with the job. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term.
	 *
	 * @property physicalRequirement
	 * @type URL
	 */
	physicalRequirement;

	/**
	 * Schema.org/experienceRequirements
	 * Description of skills and experience needed for the position or Occupation.
	 *
	 * @property experienceRequirements
	 * @type Text
	 */
	experienceRequirements;

	/**
	 * Schema.org/experienceInPlaceOfEducation
	 * Indicates whether a [[JobPosting]] will accept experience (as indicated by [[OccupationalExperienceRequirements]]) in place of its formal educational qualifications (as indicated by [[educationRequirements]]). If true, indicates that satisfying one of these requirements is sufficient.
	 *
	 * @property experienceInPlaceOfEducation
	 * @type Boolean
	 */
	experienceInPlaceOfEducation;

	/**
	 * Schema.org/specialCommitments
	 * Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.
	 *
	 * @property specialCommitments
	 * @type Text
	 */
	specialCommitments;

	/**
	 * Schema.org/workHours
	 * The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).
	 *
	 * @property workHours
	 * @type Text
	 */
	workHours;

	/**
	 * Schema.org/title
	 * The title of the job.
	 *
	 * @property title
	 * @type Text
	 */
	title;

	/**
	 * Schema.org/totalJobOpenings
	 * The number of positions open for this job posting. Use a positive integer. Do not use if the number of positions is unclear or not known.
	 *
	 * @property totalJobOpenings
	 * @type Integer
	 */
	totalJobOpenings;

	/**
	 * Schema.org/salaryCurrency
	 * The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) ) used for the main salary information in this job posting or for this employee.
	 *
	 * @property salaryCurrency
	 * @type Text
	 */
	salaryCurrency;

	/**
	 * Schema.org/baseSalary
	 * The base salary of the job or of an employee in an EmployeeRole.
	 *
	 * @property baseSalary
	 * @type PriceSpecification
	 */
	baseSalary;

	/**
	 * Schema.org/benefits
	 * Description of benefits associated with the job.
	 *
	 * @property benefits
	 * @type Text
	 */
	benefits;

	/**
	 * Schema.org/eligibilityToWorkRequirement
	 * The legal requirements such as citizenship, visa and other documentation required for an applicant to this job.
	 *
	 * @property eligibilityToWorkRequirement
	 * @type Text
	 */
	eligibilityToWorkRequirement;

	/**
	 * Schema.org/validThrough
	 * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
	 *
	 * @property validThrough
	 * @type Date
	 */
	validThrough;

	/**
	 * Schema.org/incentives
	 * Description of bonus and commission compensation aspects of the job.
	 *
	 * @property incentives
	 * @type Text
	 */
	incentives;

}