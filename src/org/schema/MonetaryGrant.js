const schema = {};
schema.Grant = require("./Grant.js");
/**
 * Schema.org/MonetaryGrant
 * A monetary grant.
 *
 * @author schema.org
 * @class MonetaryGrant
 * @module org.schema
 * @extends Grant
 */
module.exports = class MonetaryGrant extends schema.Grant {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MonetaryGrant");
	}

	/**
	 * Schema.org/amount
	 * The amount of money.
	 *
	 * @property amount
	 * @type Number
	 */
	amount;

	/**
	 * Schema.org/funder
	 * A person or organization that supports (sponsors) something through some kind of financial contribution.
	 *
	 * @property funder
	 * @type Organization
	 */
	funder;

}