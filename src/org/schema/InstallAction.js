/**
 * Schema.org/InstallAction
 * The act of installing an application.
 *
 * @author schema.org
 * @class InstallAction
 * @module org.schema
 */
module.exports = class InstallAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InstallAction");
	}

}