const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Map
 * A map.
 *
 * @author schema.org
 * @class Map
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Map extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Map");
	}

	/**
	 * Schema.org/mapType
	 * Indicates the kind of Map, from the MapCategoryType Enumeration.
	 *
	 * @property mapType
	 * @type MapCategoryType
	 */
	mapType;

}