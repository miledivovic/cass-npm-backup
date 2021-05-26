const schema = {};
schema.LodgingBusiness = require("./LodgingBusiness.js");
/**
 * Schema.org/Hostel
 * A hostel - cheap accommodation, often in shared dormitories.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

 *
 * @author schema.org
 * @class Hostel
 * @module org.schema
 * @extends LodgingBusiness
 */
module.exports = class Hostel extends schema.LodgingBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Hostel");
	}

}