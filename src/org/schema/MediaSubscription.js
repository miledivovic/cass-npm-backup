const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/MediaSubscription
 * A subscription which allows a user to access media including audio, video, books, etc.
 *
 * @author schema.org
 * @class MediaSubscription
 * @module org.schema
 * @extends Intangible
 */
module.exports = class MediaSubscription extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MediaSubscription");
	}

	/**
	 * Schema.org/authenticator
	 * The Organization responsible for authenticating the user's subscription. For example, many media apps require a cable/satellite provider to authenticate your subscription before playing media.
	 *
	 * @property authenticator
	 * @type Organization
	 */
	authenticator;

	/**
	 * Schema.org/expectsAcceptanceOf
	 * An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.
	 *
	 * @property expectsAcceptanceOf
	 * @type Offer
	 */
	expectsAcceptanceOf;

}