/**
 * Schema.org/Energy
 * Properties that take Energy as values are of the form '&lt;Number&gt; &lt;Energy unit of measure&gt;'.
 *
 * @author schema.org
 * @class Energy
 * @module org.schema
 */
module.exports = class Energy extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Energy");
	}
};
