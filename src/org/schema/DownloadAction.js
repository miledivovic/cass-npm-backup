/**
 * Schema.org/DownloadAction
 * The act of downloading an object.
 *
 * @author schema.org
 * @class DownloadAction
 * @module org.schema
 */
module.exports = class DownloadAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DownloadAction");
	}

}