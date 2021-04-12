/**
 * Schema.org/HowToDirection
 * A direction indicating a single action to do in the instructions for how to achieve a result.
 *
 * @author schema.org
 * @class HowToDirection
 * @module org.schema
 * @extends CreativeWork
 */
public class HowToDirection extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HowToDirection";
	}

}