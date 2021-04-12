/**
 * Schema.org/Winery
 * A winery.
 *
 * @author schema.org
 * @class Winery
 * @module org.schema
 */
public class Winery extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Winery";
	}

}