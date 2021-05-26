const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/ProgramMembership
 * Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 *
 * @author schema.org
 * @class ProgramMembership
 * @module org.schema
 * @extends Intangible
 */
module.exports = class ProgramMembership extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ProgramMembership");
	}

	/**
	 * Schema.org/membershipPointsEarned
	 * The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (e.g. stars, miles, etc.)
	 *
	 * @property membershipPointsEarned
	 * @type QuantitativeValue
	 */
	membershipPointsEarned;

	/**
	 * Schema.org/membershipNumber
	 * A unique identifier for the membership.
	 *
	 * @property membershipNumber
	 * @type Text
	 */
	membershipNumber;

	/**
	 * Schema.org/members
	 * A member of this organization.
	 *
	 * @property members
	 * @type Organization
	 */
	members;

	/**
	 * Schema.org/programName
	 * The program providing the membership.
	 *
	 * @property programName
	 * @type Text
	 */
	programName;

	/**
	 * Schema.org/member
	 * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
	 *
	 * @property member
	 * @type Person
	 */
	member;

	/**
	 * Schema.org/hostingOrganization
	 * The organization (airline, travelers' club, etc.) the membership is made with.
	 *
	 * @property hostingOrganization
	 * @type Organization
	 */
	hostingOrganization;

}