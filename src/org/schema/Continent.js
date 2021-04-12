/**
 * Schema.org/Continent
 * One of the continents (for example, Europe or Africa).
 *
 * @author schema.org
 * @class Continent
 * @module org.schema
 */
public class Continent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Continent";
	}

}