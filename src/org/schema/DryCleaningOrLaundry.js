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
		super();
		this.setContextAndType("http://schema.org/","DryCleaningOrLaundry");
	}

}