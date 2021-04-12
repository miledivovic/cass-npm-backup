/**
 * Schema.org/Car
 * A car is a wheeled, self-powered motor vehicle used for transportation.
 *
 * @author schema.org
 * @class Car
 * @module org.schema
 */
public class Car extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Car";
	}

}