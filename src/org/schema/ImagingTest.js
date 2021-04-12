/**
 * Schema.org/ImagingTest
 * Any medical imaging modality typically used for diagnostic purposes.
 *
 * @author schema.org
 * @class ImagingTest
 * @module org.schema
 */
module.exports = class ImagingTest extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ImagingTest";
	}

}