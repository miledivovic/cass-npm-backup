/**
 * Schema.org/BoatTerminal
 * A terminal for boats, ships, and other water vessels.
 *
 * @author schema.org
 * @class BoatTerminal
 * @module org.schema
 */
module.exports = class BoatTerminal extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "BoatTerminal");
	}
};
