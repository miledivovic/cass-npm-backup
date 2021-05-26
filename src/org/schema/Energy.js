const schema = {};
schema.Quantity = require("./Quantity.js");
/**
 * Schema.org/Energy
 * Properties that take Energy as values are of the form '&lt;Number&gt; &lt;Energy unit of measure&gt;'.
 *
 * @author schema.org
 * @class Energy
 * @module org.schema
 * @extends Quantity
 */
module.exports = class Energy extends schema.Quantity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Energy");
	}

}