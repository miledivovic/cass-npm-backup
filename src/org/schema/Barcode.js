/**
 * Schema.org/Barcode
 * An image of a visual machine-readable code such as a barcode or QR code.
 *
 * @author schema.org
 * @class Barcode
 * @module org.schema
 */
module.exports = class Barcode extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Barcode");
	}

}