/**
 * Schema.org/QuoteAction
 * An agent quotes/estimates/appraises an object/product/service with a price at a location/store.
 *
 * @author schema.org
 * @class QuoteAction
 * @module org.schema
 */
public class QuoteAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "QuoteAction";
	}

}