/**
 * Schema.org/RadioStation
 * A radio station.
 *
 * @author schema.org
 * @class RadioStation
 * @module org.schema
 */
public class RadioStation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "RadioStation";
	}

}