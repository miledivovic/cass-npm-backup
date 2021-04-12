/**
 * Schema.org/StadiumOrArena
 * A stadium.
 *
 * @author schema.org
 * @class StadiumOrArena
 * @module org.schema
 * @extends CivicStructure
 */
public class StadiumOrArena extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "StadiumOrArena";
	}

}