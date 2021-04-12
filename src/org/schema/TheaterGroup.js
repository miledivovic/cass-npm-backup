/**
 * Schema.org/TheaterGroup
 * A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre.
 *
 * @author schema.org
 * @class TheaterGroup
 * @module org.schema
 */
public class TheaterGroup extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TheaterGroup";
	}

}