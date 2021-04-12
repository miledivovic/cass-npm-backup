/**
 * Schema.org/UserReview
 * A review created by an end-user (e.g. consumer, purchaser, attendee etc.), in contrast with [[CriticReview]].
 *
 * @author schema.org
 * @class UserReview
 * @module org.schema
 */
public class UserReview extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "UserReview";
	}

}