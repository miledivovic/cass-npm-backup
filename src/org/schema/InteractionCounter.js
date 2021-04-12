/**
 * Schema.org/InteractionCounter
 * A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.
 *
 * @author schema.org
 * @class InteractionCounter
 * @module org.schema
 */
module.exports = class InteractionCounter extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "InteractionCounter";
	}

}