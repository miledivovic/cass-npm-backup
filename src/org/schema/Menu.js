/**
 * Schema.org/Menu
 * A structured representation of food or drink items available from a FoodEstablishment.
 *
 * @author schema.org
 * @class Menu
 * @module org.schema
 */
module.exports = class Menu extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Menu");
	}

}