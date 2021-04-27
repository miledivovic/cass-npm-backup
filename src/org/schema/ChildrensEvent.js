/**
 * Schema.org/ChildrensEvent
 * Event type: Children's event.
 *
 * @author schema.org
 * @class ChildrensEvent
 * @module org.schema
 */
module.exports = class ChildrensEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ChildrensEvent");
	}
};
