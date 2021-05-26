const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Message
 * A single message from a sender to one or more organizations or people.
 *
 * @author schema.org
 * @class Message
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Message extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Message");
	}

	/**
	 * Schema.org/sender
	 * A sub property of participant. The participant who is at the sending end of the action.
	 *
	 * @property sender
	 * @type Person
	 */
	sender;

	/**
	 * Schema.org/dateRead
	 * The date/time at which the message has been read by the recipient if a single recipient exists.
	 *
	 * @property dateRead
	 * @type DateTime
	 */
	dateRead;

	/**
	 * Schema.org/toRecipient
	 * A sub property of recipient. The recipient who was directly sent the message.
	 *
	 * @property toRecipient
	 * @type Audience
	 */
	toRecipient;

	/**
	 * Schema.org/messageAttachment
	 * A CreativeWork attached to the message.
	 *
	 * @property messageAttachment
	 * @type CreativeWork
	 */
	messageAttachment;

	/**
	 * Schema.org/recipient
	 * A sub property of participant. The participant who is at the receiving end of the action.
	 *
	 * @property recipient
	 * @type Organization
	 */
	recipient;

	/**
	 * Schema.org/ccRecipient
	 * A sub property of recipient. The recipient copied on a message.
	 *
	 * @property ccRecipient
	 * @type ContactPoint
	 */
	ccRecipient;

	/**
	 * Schema.org/dateSent
	 * The date/time at which the message was sent.
	 *
	 * @property dateSent
	 * @type DateTime
	 */
	dateSent;

	/**
	 * Schema.org/dateReceived
	 * The date/time the message was received if a single recipient exists.
	 *
	 * @property dateReceived
	 * @type DateTime
	 */
	dateReceived;

	/**
	 * Schema.org/bccRecipient
	 * A sub property of recipient. The recipient blind copied on a message.
	 *
	 * @property bccRecipient
	 * @type Person
	 */
	bccRecipient;

}