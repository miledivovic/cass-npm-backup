const schema = {};
schema.SportsOrganization = require("./SportsOrganization.js");
/**
 * Schema.org/SportsTeam
 * Organization: Sports team.
 *
 * @author schema.org
 * @class SportsTeam
 * @module org.schema
 * @extends SportsOrganization
 */
module.exports = class SportsTeam extends schema.SportsOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SportsTeam");
	}

	/**
	 * Schema.org/coach
	 * A person that acts in a coaching role for a sports team.
	 *
	 * @property coach
	 * @type Person
	 */
	coach;

	/**
	 * Schema.org/gender
	 * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While schema:Male and schema:Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
	 *
	 * @property gender
	 * @type Text
	 */
	gender;

	/**
	 * Schema.org/athlete
	 * A person that acts as performing member of a sports team; a player as opposed to a coach.
	 *
	 * @property athlete
	 * @type Person
	 */
	athlete;

}