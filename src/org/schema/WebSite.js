const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/WebSite
 * A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.
 *
 * @author schema.org
 * @class WebSite
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class WebSite extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WebSite");
	}

	/**
	 * Schema.org/issn
	 * The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
	 *
	 * @property issn
	 * @type Text
	 */
	issn;

}