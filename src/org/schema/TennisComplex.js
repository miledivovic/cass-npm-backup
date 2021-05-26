const schema = {};
schema.SportsActivityLocation = require("./SportsActivityLocation.js");
/**
 * Schema.org/TennisComplex
 * A tennis complex.
 *
 * @author schema.org
 * @class TennisComplex
 * @module org.schema
 * @extends SportsActivityLocation
 */
module.exports = class TennisComplex extends schema.SportsActivityLocation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TennisComplex");
	}

}