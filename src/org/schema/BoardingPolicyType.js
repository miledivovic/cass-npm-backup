const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/BoardingPolicyType
 * A type of boarding policy used by an airline.
 *
 * @author schema.org
 * @class BoardingPolicyType
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class BoardingPolicyType extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BoardingPolicyType");
	}

}