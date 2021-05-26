const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/PublicationEvent
 * A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.
 *
 * @author schema.org
 * @class PublicationEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class PublicationEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PublicationEvent");
	}

	/**
	 * Schema.org/free
	 * A flag to signal that the item, event, or place is accessible for free.
	 *
	 * @property free
	 * @type Boolean
	 */
	free;

	/**
	 * Schema.org/publishedOn
	 * A broadcast service associated with the publication event.
	 *
	 * @property publishedOn
	 * @type BroadcastService
	 */
	publishedOn;

	/**
	 * Schema.org/publishedBy
	 * An agent associated with the publication event.
	 *
	 * @property publishedBy
	 * @type Organization
	 */
	publishedBy;

}