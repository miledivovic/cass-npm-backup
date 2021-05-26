const schema = {};
schema.Action = require("./Action.js");
/**
 * Schema.org/ConsumeAction
 * The act of ingesting information/resources/food.
 *
 * @author schema.org
 * @class ConsumeAction
 * @module org.schema
 * @extends Action
 */
module.exports = class ConsumeAction extends schema.Action {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ConsumeAction");
	}

	/**
	 * Schema.org/expectsAcceptanceOf
	 * An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.
	 *
	 * @property expectsAcceptanceOf
	 * @type Offer
	 */
	expectsAcceptanceOf;

	/**
	 * Schema.org/actionAccessibilityRequirement
	 * A set of requirements that a must be fulfilled in order to perform an Action. If more than one value is specied, fulfilling one set of requirements will allow the Action to be performed.
	 *
	 * @property actionAccessibilityRequirement
	 * @type ActionAccessSpecification
	 */
	actionAccessibilityRequirement;

}