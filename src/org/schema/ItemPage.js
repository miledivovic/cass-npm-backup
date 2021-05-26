const schema = {};
schema.WebPage = require("./WebPage.js");
/**
 * Schema.org/ItemPage
 * A page devoted to a single item, such as a particular product or hotel.
 *
 * @author schema.org
 * @class ItemPage
 * @module org.schema
 * @extends WebPage
 */
module.exports = class ItemPage extends schema.WebPage {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ItemPage");
	}

}