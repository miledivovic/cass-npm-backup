/**
 * Schema.org/DryCleaningOrLaundry
 * A dry-cleaning business.
 *
 * @author schema.org
 * @class DryCleaningOrLaundry
 * @module org.schema
 */
module.exports = class DryCleaningOrLaundry extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DryCleaningOrLaundry";
	}

}