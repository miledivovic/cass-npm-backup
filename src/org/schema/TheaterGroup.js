/**
 * Schema.org/TheaterGroup
 * A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre.
 *
 * @author schema.org
 * @class TheaterGroup
 * @module org.schema
 */
module.exports = class TheaterGroup extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "TheaterGroup");
	}
};
