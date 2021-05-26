const schema = {};
schema.LodgingBusiness = require("./LodgingBusiness.js");
/**
 * Schema.org/Hotel
 * A hotel is an establishment that provides lodging paid on a short-term basis (Source: Wikipedia, the free encyclopedia, see http://en.wikipedia.org/wiki/Hotel).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

 *
 * @author schema.org
 * @class Hotel
 * @module org.schema
 * @extends LodgingBusiness
 */
module.exports = class Hotel extends schema.LodgingBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Hotel");
	}

}