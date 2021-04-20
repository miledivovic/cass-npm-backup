/**
 * Schema.org/Continent
 * One of the continents (for example, Europe or Africa).
 *
 * @author schema.org
 * @class Continent
 * @module org.schema
 */
module.exports = class Continent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Continent");
	}

}