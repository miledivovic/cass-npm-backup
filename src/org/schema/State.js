/**
 * Schema.org/State
 * A state or province of a country.
 *
 * @author schema.org
 * @class State
 * @module org.schema
 */
module.exports = class State extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","State");
	}

}