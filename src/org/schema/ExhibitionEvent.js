/**
 * Schema.org/ExhibitionEvent
 * Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ...
 *
 * @author schema.org
 * @class ExhibitionEvent
 * @module org.schema
 */
module.exports = class ExhibitionEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ExhibitionEvent");
	}
};
