/**
 * Schema.org/RadioSeason
 * Season dedicated to radio broadcast and associated online delivery.
 *
 * @author schema.org
 * @class RadioSeason
 * @module org.schema
 */
module.exports = class RadioSeason extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "RadioSeason");
	}
};
