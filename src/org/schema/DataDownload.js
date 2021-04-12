/**
 * Schema.org/DataDownload
 * A dataset in downloadable form.
 *
 * @author schema.org
 * @class DataDownload
 * @module org.schema
 */
module.exports = class DataDownload extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DataDownload";
	}

}