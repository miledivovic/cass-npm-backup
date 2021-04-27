/**
 * Schema.org/Map
 * A map.
 *
 * @author schema.org
 * @class Map
 * @module org.schema
 */
module.exports = class Map extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Map");
	}
};
