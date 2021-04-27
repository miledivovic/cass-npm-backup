/**
 * Schema.org/WearableSizeSystemEnumeration
 * Enumerates common size systems specific for wearable products
 *
 * @author schema.org
 * @class WearableSizeSystemEnumeration
 * @module org.schema
 */
module.exports = class WearableSizeSystemEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.org/",
			"WearableSizeSystemEnumeration"
		);
	}
};
