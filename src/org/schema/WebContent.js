const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/WebContent
 * WebContent is a type representing all [[WebPage]], [[WebSite]] and [[WebPageElement]] content. It is sometimes the case that detailed distinctions between Web pages, sites and their parts is not always important or obvious. The  [[WebContent]] type makes it easier to describe Web-addressable content without requiring such distinctions to always be stated. (The intent is that the existing types [[WebPage]], [[WebSite]] and [[WebPageElement]] will eventually be declared as subtypes of [[WebContent]]).
 *
 * @author schema.org
 * @class WebContent
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class WebContent extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WebContent");
	}

}