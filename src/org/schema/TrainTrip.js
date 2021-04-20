/**
 * Schema.org/TrainTrip
 * A trip on a commercial train line.
 *
 * @author schema.org
 * @class TrainTrip
 * @module org.schema
 */
module.exports = class TrainTrip extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TrainTrip");
	}

}