/**
 * Schema.org/DefenceEstablishment
 * A defence establishment, such as an army or navy base.
 *
 * @author schema.org
 * @class DefenceEstablishment
 * @module org.schema
 */
module.exports = class DefenceEstablishment extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DefenceEstablishment");
	}

}