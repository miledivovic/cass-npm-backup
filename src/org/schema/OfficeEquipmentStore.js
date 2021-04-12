/**
 * Schema.org/OfficeEquipmentStore
 * An office equipment store.
 *
 * @author schema.org
 * @class OfficeEquipmentStore
 * @module org.schema
 */
module.exports = class OfficeEquipmentStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "OfficeEquipmentStore";
	}

}