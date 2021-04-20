/**
 * Schema.org/MedicalWebPage
 * A web page that provides medical information.
 *
 * @author schema.org
 * @class MedicalWebPage
 * @module org.schema
 */
module.exports = class MedicalWebPage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalWebPage");
	}

}