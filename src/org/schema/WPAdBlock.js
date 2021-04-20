/**
 * Schema.org/WPAdBlock
 * An advertising section of the page.
 *
 * @author schema.org
 * @class WPAdBlock
 * @module org.schema
 */
module.exports = class WPAdBlock extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WPAdBlock");
	}

}