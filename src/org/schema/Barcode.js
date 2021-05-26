const schema = {};
schema.ImageObject = require("./ImageObject.js");
/**
 * Schema.org/Barcode
 * An image of a visual machine-readable code such as a barcode or QR code.
 *
 * @author schema.org
 * @class Barcode
 * @module org.schema
 * @extends ImageObject
 */
module.exports = class Barcode extends schema.ImageObject {
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