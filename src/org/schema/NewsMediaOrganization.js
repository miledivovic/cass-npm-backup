/**
 * Schema.org/NewsMediaOrganization
 * A News/Media organization such as a newspaper or TV station.
 *
 * @author schema.org
 * @class NewsMediaOrganization
 * @module org.schema
 */
module.exports = class NewsMediaOrganization extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "NewsMediaOrganization";
	}

}