/**
 * Schema.org/DDxElement
 * An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it.
 *
 * @author schema.org
 * @class DDxElement
 * @module org.schema
 */
module.exports = class DDxElement extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DDxElement";
	}

}