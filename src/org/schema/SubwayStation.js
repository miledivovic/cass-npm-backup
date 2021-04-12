/**
 * Schema.org/SubwayStation
 * A subway station.
 *
 * @author schema.org
 * @class SubwayStation
 * @module org.schema
 */
public class SubwayStation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SubwayStation";
	}

}