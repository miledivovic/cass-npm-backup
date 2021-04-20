/**
 * Schema.org/OnDemandEvent
 * A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand.
 *
 * @author schema.org
 * @class OnDemandEvent
 * @module org.schema
 */
module.exports = class OnDemandEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OnDemandEvent");
	}

}