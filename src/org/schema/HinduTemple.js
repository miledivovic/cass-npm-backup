/**
 * Schema.org/HinduTemple
 * A Hindu temple.
 *
 * @author schema.org
 * @class HinduTemple
 * @module org.schema
 */
module.exports = class HinduTemple extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HinduTemple");
	}

}