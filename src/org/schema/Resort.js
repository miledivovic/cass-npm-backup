const schema = {};
schema.LodgingBusiness = require("./LodgingBusiness.js");
/**
 * Schema.org/Resort
 * A resort is a place used for relaxation or recreation, attracting visitors for holidays or vacations. Resorts are places, towns or sometimes commercial establishment operated by a single company (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Resort">http://en.wikipedia.org/wiki/Resort</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
    
 *
 * @author schema.org
 * @class Resort
 * @module org.schema
 * @extends LodgingBusiness
 */
module.exports = class Resort extends schema.LodgingBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Resort");
	}

}