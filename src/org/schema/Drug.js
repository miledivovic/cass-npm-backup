/**
 * Schema.org/Drug
 * A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge make a clear difference between them.
 *
 * @author schema.org
 * @class Drug
 * @module org.schema
 */
public class Drug extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Drug";
	}

}