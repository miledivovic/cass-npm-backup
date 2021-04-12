/**
 * Schema.org/LifestyleModification
 * A process of care involving exercise, changes to diet, fitness routines, and other lifestyle changes aimed at improving a health condition.
 *
 * @author schema.org
 * @class LifestyleModification
 * @module org.schema
 */
public class LifestyleModification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "LifestyleModification";
	}

}