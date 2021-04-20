/**
 * Schema.org/MapCategoryType
 * An enumeration of several kinds of Map.
 *
 * @author schema.org
 * @class MapCategoryType
 * @module org.schema
 */
module.exports = class MapCategoryType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MapCategoryType");
	}

}