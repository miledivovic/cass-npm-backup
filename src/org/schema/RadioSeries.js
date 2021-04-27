/**
 * Schema.org/RadioSeries
 * CreativeWorkSeries dedicated to radio broadcast and associated online delivery.
 *
 * @author schema.org
 * @class RadioSeries
 * @module org.schema
 */
module.exports = class RadioSeries extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "RadioSeries");
	}
};
