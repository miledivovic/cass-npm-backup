/**
 * Schema.org/UpdateAction
 * The act of managing by changing/editing the state of the object.
 *
 * @author schema.org
 * @class UpdateAction
 * @module org.schema
 */
module.exports = class UpdateAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "UpdateAction");
	}
};
