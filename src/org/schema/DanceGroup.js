/**
 * Schema.org/DanceGroup
 * A dance group&#x2014;for example, the Alvin Ailey Dance Theater or Riverdance.
 *
 * @author schema.org
 * @class DanceGroup
 * @module org.schema
 */
public class DanceGroup extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DanceGroup";
	}

}