/**
 * Schema.org/GasStation
 * A gas station.
 *
 * @author schema.org
 * @class GasStation
 * @module org.schema
 */
public class GasStation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "GasStation";
	}

}