/**
 * Schema.org/AutoDealer
 * An car dealership.
 *
 * @author schema.org
 * @class AutoDealer
 * @module org.schema
 */
public class AutoDealer extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AutoDealer";
	}

}