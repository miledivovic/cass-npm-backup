/**
 * Schema.org/BowlingAlley
 * A bowling alley.
 *
 * @author schema.org
 * @class BowlingAlley
 * @module org.schema
 */
module.exports = class BowlingAlley extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "BowlingAlley");
	}
};
