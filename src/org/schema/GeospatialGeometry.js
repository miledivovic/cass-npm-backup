/**
 * Schema.org/GeospatialGeometry
 * (Eventually to be defined as) a supertype of GeoShape designed to accommodate definitions from Geo-Spatial best practices.
 *
 * @author schema.org
 * @class GeospatialGeometry
 * @module org.schema
 */
module.exports = class GeospatialGeometry extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "GeospatialGeometry");
	}
};
