/**
 * Schema.org/WearableMeasurementTypeEnumeration
 * Enumerates common types of measurement for wearables products.
 *
 * @author schema.org
 * @class WearableMeasurementTypeEnumeration
 * @module org.schema
 */
module.exports = class WearableMeasurementTypeEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.org/",
			"WearableMeasurementTypeEnumeration"
		);
	}
};
