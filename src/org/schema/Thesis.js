const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Thesis
 * A thesis or dissertation document submitted in support of candidature for an academic degree or professional qualification.
 *
 * @author schema.org
 * @class Thesis
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Thesis extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Thesis");
	}

	/**
	 * Schema.org/inSupportOf
	 * Qualification, candidature, degree, application that Thesis supports.
	 *
	 * @property inSupportOf
	 * @type Text
	 */
	inSupportOf;

}