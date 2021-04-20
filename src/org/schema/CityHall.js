/**
 * Schema.org/CityHall
 * A city hall.
 *
 * @author schema.org
 * @class CityHall
 * @module org.schema
 */
module.exports = class CityHall extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CityHall");
	}

}