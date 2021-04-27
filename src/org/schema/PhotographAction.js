/**
 * Schema.org/PhotographAction
 * The act of capturing still images of objects using a camera.
 *
 * @author schema.org
 * @class PhotographAction
 * @module org.schema
 */
module.exports = class PhotographAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "PhotographAction");
	}
};
