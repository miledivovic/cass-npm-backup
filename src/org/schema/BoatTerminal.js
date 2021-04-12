/**
 * Schema.org/BoatTerminal
 * A terminal for boats, ships, and other water vessels.
 *
 * @author schema.org
 * @class BoatTerminal
 * @module org.schema
 */
public class BoatTerminal extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BoatTerminal";
	}

}