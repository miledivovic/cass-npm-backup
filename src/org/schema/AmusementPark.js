/**
 * Schema.org/AmusementPark
 * An amusement park.
 *
 * @author schema.org
 * @class AmusementPark
 * @module org.schema
 */
module.exports = class AmusementPark extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "AmusementPark");
	}
};
