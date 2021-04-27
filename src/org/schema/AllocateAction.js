/**
 * Schema.org/AllocateAction
 * The act of organizing tasks/objects/events by associating resources to it.
 *
 * @author schema.org
 * @class AllocateAction
 * @module org.schema
 */
module.exports = class AllocateAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "AllocateAction");
	}
};
