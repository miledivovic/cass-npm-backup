global.schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/MovieTheater
 * A movie theater.
 *
 * @author schema.org
 * @class MovieTheater
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class MovieTheater extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MovieTheater");
	}
};
