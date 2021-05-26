const schema = {};
schema.GeoShape = require("./GeoShape.js");
/**
 * Schema.org/GeoCircle
 * A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape
          it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius.
          The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'.
       
 *
 * @author schema.org
 * @class GeoCircle
 * @module org.schema
 * @extends GeoShape
 */
module.exports = class GeoCircle extends schema.GeoShape {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GeoCircle");
	}

	/**
	 * Schema.org/geoMidpoint
	 * Indicates the GeoCoordinates at the centre of a GeoShape e.g. GeoCircle.
	 *
	 * @property geoMidpoint
	 * @type GeoCoordinates
	 */
	geoMidpoint;

	/**
	 * Schema.org/geoRadius
	 * Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation).
	 *
	 * @property geoRadius
	 * @type Text
	 */
	geoRadius;

}