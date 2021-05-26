const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Ticket
 * Used to describe a ticket to an event, a flight, a bus ride, etc.
 *
 * @author schema.org
 * @class Ticket
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Ticket extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Ticket");
	}

	/**
	 * Schema.org/underName
	 * The person or organization the reservation or ticket is for.
	 *
	 * @property underName
	 * @type Organization
	 */
	underName;

	/**
	 * Schema.org/priceCurrency
	 * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
	 *
	 * @property priceCurrency
	 * @type Text
	 */
	priceCurrency;

	/**
	 * Schema.org/ticketNumber
	 * The unique identifier for the ticket.
	 *
	 * @property ticketNumber
	 * @type Text
	 */
	ticketNumber;

	/**
	 * Schema.org/totalPrice
	 * The total price for the reservation or ticket, including applicable taxes, shipping, etc.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
	 *
	 * @property totalPrice
	 * @type Number
	 */
	totalPrice;

	/**
	 * Schema.org/issuedBy
	 * The organization issuing the ticket or permit.
	 *
	 * @property issuedBy
	 * @type Organization
	 */
	issuedBy;

	/**
	 * Schema.org/ticketToken
	 * Reference to an asset (e.g., Barcode, QR code image or PDF) usable for entrance.
	 *
	 * @property ticketToken
	 * @type Text
	 */
	ticketToken;

	/**
	 * Schema.org/ticketedSeat
	 * The seat associated with the ticket.
	 *
	 * @property ticketedSeat
	 * @type Seat
	 */
	ticketedSeat;

	/**
	 * Schema.org/dateIssued
	 * The date the ticket was issued.
	 *
	 * @property dateIssued
	 * @type DateTime
	 */
	dateIssued;

}