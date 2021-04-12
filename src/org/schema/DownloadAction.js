/**
 * Schema.org/DownloadAction
 * The act of downloading an object.
 *
 * @author schema.org
 * @class DownloadAction
 * @module org.schema
 */
public class DownloadAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DownloadAction";
	}

}