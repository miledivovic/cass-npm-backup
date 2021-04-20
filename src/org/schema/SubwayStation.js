/**
 * Schema.org/SubwayStation
 * A subway station.
 *
 * @author schema.org
 * @class SubwayStation
 * @module org.schema
 */
module.exports = class SubwayStation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SubwayStation");
	}

}