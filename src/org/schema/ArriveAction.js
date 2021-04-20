/**
 * Schema.org/ArriveAction
 * The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants.
 *
 * @author schema.org
 * @class ArriveAction
 * @module org.schema
 */
module.exports = class ArriveAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ArriveAction");
	}

}