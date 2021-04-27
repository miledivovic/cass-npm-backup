/**
 * Schema.org/Waterfall
 * A waterfall, like Niagara.
 *
 * @author schema.org
 * @class Waterfall
 * @module org.schema
 */
module.exports = class Waterfall extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Waterfall");
	}
};
