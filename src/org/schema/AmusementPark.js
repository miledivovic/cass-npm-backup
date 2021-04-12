/**
 * Schema.org/AmusementPark
 * An amusement park.
 *
 * @author schema.org
 * @class AmusementPark
 * @module org.schema
 */
public class AmusementPark extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AmusementPark";
	}

}