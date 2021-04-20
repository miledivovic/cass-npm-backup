/**
 * Schema.org/GovernmentPermit
 * A permit issued by a government agency.
 *
 * @author schema.org
 * @class GovernmentPermit
 * @module org.schema
 */
module.exports = class GovernmentPermit extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GovernmentPermit");
	}

}