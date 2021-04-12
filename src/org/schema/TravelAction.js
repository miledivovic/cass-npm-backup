/**
 * Schema.org/TravelAction
 * The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants.
 *
 * @author schema.org
 * @class TravelAction
 * @module org.schema
 */
public class TravelAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TravelAction";
	}

}