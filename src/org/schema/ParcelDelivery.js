/**
 * Schema.org/ParcelDelivery
 * The delivery of a parcel either via the postal service or a commercial service.
 *
 * @author schema.org
 * @class ParcelDelivery
 * @module org.schema
 */
module.exports = class ParcelDelivery extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ParcelDelivery");
	}
};
