/**
 * Schema.org/DiscoverAction
 * The act of discovering/finding an object.
 *
 * @author schema.org
 * @class DiscoverAction
 * @module org.schema
 */
module.exports = class DiscoverAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "DiscoverAction");
	}
};
