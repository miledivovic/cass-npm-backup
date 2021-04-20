/**
 * Schema.org/DanceGroup
 * A dance group&#x2014;for example, the Alvin Ailey Dance Theater or Riverdance.
 *
 * @author schema.org
 * @class DanceGroup
 * @module org.schema
 */
module.exports = class DanceGroup extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DanceGroup");
	}

}