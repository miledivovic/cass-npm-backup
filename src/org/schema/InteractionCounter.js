const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/InteractionCounter
 * A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.
 *
 * @author schema.org
 * @class InteractionCounter
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class InteractionCounter extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InteractionCounter");
	}

	/**
	 * Schema.org/userInteractionCount
	 * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication.
	 *
	 * @property userInteractionCount
	 * @type Integer
	 */
	userInteractionCount;

	/**
	 * Schema.org/interactionService
	 * The WebSite or SoftwareApplication where the interactions took place.
	 *
	 * @property interactionService
	 * @type SoftwareApplication
	 */
	interactionService;

	/**
	 * Schema.org/interactionType
	 * The Action representing the type of interaction. For up votes, +1s, etc. use [[LikeAction]]. For down votes use [[DislikeAction]]. Otherwise, use the most specific Action.
	 *
	 * @property interactionType
	 * @type Action
	 */
	interactionType;

}