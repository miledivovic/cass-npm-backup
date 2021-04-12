/**
 * Schema.org/PublicationEvent
 * A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.
 *
 * @author schema.org
 * @class PublicationEvent
 * @module org.schema
 */
module.exports = class PublicationEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PublicationEvent";
	}

}