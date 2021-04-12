/**
 * Schema.org/RadioSeason
 * Season dedicated to radio broadcast and associated online delivery.
 *
 * @author schema.org
 * @class RadioSeason
 * @module org.schema
 */
public class RadioSeason extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "RadioSeason";
	}

}