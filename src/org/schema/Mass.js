/**
 * Schema.org/Mass
 * Properties that take Mass as values are of the form '&lt;Number&gt; &lt;Mass unit of measure&gt;'. E.g., '7 kg'.
 *
 * @author schema.org
 * @class Mass
 * @module org.schema
 */
module.exports = class Mass extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Mass");
	}

}