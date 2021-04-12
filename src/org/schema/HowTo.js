/**
 * Schema.org/HowTo
 * Instructions that explain how to achieve a result by performing a sequence of steps.
 *
 * @author schema.org
 * @class HowTo
 * @module org.schema
 */
public class HowTo extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HowTo";
	}

}