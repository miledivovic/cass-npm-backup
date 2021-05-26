const schema = {};
schema.Church = require("./Church.js");
/**
 * Schema.org/CatholicChurch
 * A Catholic church.
 *
 * @author schema.org
 * @class CatholicChurch
 * @module org.schema
 * @extends Church
 */
module.exports = class CatholicChurch extends schema.Church {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CatholicChurch");
	}

}