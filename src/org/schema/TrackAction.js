const schema = {};
schema.FindAction = require("./FindAction.js");
/**
 * Schema.org/TrackAction
 * An agent tracks an object for updates.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.\n* [[SubscribeAction]]: Unlike SubscribeAction, TrackAction refers to  the interest on the location of innanimate objects.
 *
 * @author schema.org
 * @class TrackAction
 * @module org.schema
 * @extends FindAction
 */
module.exports = class TrackAction extends schema.FindAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TrackAction");
	}

	/**
	 * Schema.org/deliveryMethod
	 * A sub property of instrument. The method of delivery.
	 *
	 * @property deliveryMethod
	 * @type DeliveryMethod
	 */
	deliveryMethod;

}