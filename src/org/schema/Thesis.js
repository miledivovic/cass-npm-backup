/**
 * Schema.org/Thesis
 * A thesis or dissertation document submitted in support of candidature for an academic degree or professional qualification.
 *
 * @author schema.org
 * @class Thesis
 * @module org.schema
 */
module.exports = class Thesis extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Thesis");
	}

}