/**
 * Schema.org/WebAPI
 * An application programming interface accessible over Web/Internet technologies.
 *
 * @author schema.org
 * @class WebAPI
 * @module org.schema
 */
module.exports = class WebAPI extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WebAPI");
	}

}