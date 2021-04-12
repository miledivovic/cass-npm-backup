/**
 * Schema.org/TelevisionStation
 * A television station.
 *
 * @author schema.org
 * @class TelevisionStation
 * @module org.schema
 */
public class TelevisionStation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TelevisionStation";
	}

}