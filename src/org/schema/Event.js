const schema = {};
schema.Thing = require("./Thing.js");
/**
 * Schema.org/Event
 * An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the [[offers]] property. Repeated events may be structured as separate Event objects.
 *
 * @author schema.org
 * @class Event
 * @module org.schema
 * @extends Thing
 */
module.exports = class Event extends schema.Thing {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Event");
	}

	/**
	 * Schema.org/workFeatured
	 * A work featured in some event, e.g. exhibited in an ExhibitionEvent.
       Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).
	 *
	 * @property workFeatured
	 * @type CreativeWork
	 */
	workFeatured;

	/**
	 * Schema.org/aggregateRating
	 * The overall rating, based on a collection of reviews or ratings, of the item.
	 *
	 * @property aggregateRating
	 * @type AggregateRating
	 */
	aggregateRating;

	/**
	 * Schema.org/workPerformed
	 * A work performed in some event, for example a play performed in a TheaterEvent.
	 *
	 * @property workPerformed
	 * @type CreativeWork
	 */
	workPerformed;

	/**
	 * Schema.org/eventSchedule
	 * Associates an [[Event]] with a [[Schedule]]. There are circumstances where it is preferable to share a schedule for a series of
      repeating events rather than data on the individual events themselves. For example, a website or application might prefer to publish a schedule for a weekly
      gym class rather than provide data on every event. A schedule could be processed by applications to add forthcoming events to a calendar. An [[Event]] that
      is associated with a [[Schedule]] using this property should not have [[startDate]] or [[endDate]] properties. These are instead defined within the associated
      [[Schedule]], this avoids any ambiguity for clients using the data. The property might have repeated values to specify different schedules, e.g. for different months
      or seasons.
	 *
	 * @property eventSchedule
	 * @type Schedule
	 */
	eventSchedule;

	/**
	 * Schema.org/attendees
	 * A person attending the event.
	 *
	 * @property attendees
	 * @type Organization
	 */
	attendees;

	/**
	 * Schema.org/contributor
	 * A secondary contributor to the CreativeWork or Event.
	 *
	 * @property contributor
	 * @type Person
	 */
	contributor;

	/**
	 * Schema.org/actor
	 * An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property actor
	 * @type Person
	 */
	actor;

	/**
	 * Schema.org/performer
	 * A performer at the event&#x2014;for example, a presenter, musician, musical group or actor.
	 *
	 * @property performer
	 * @type Person
	 */
	performer;

	/**
	 * Schema.org/offers
	 * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
      
	 *
	 * @property offers
	 * @type Demand
	 */
	offers;

	/**
	 * Schema.org/startDate
	 * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
	 *
	 * @property startDate
	 * @type Date
	 */
	startDate;

	/**
	 * Schema.org/director
	 * A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property director
	 * @type Person
	 */
	director;

	/**
	 * Schema.org/previousStartDate
	 * Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.
	 *
	 * @property previousStartDate
	 * @type Date
	 */
	previousStartDate;

	/**
	 * Schema.org/review
	 * A review of the item.
	 *
	 * @property review
	 * @type Review
	 */
	review;

	/**
	 * Schema.org/translator
	 * Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
	 *
	 * @property translator
	 * @type Person
	 */
	translator;

	/**
	 * Schema.org/organizer
	 * An organizer of an Event.
	 *
	 * @property organizer
	 * @type Person
	 */
	organizer;

	/**
	 * Schema.org/subEvents
	 * Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.
	 *
	 * @property subEvents
	 * @type Event
	 */
	subEvents;

	/**
	 * Schema.org/sponsor
	 * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
	 *
	 * @property sponsor
	 * @type Person
	 */
	sponsor;

	/**
	 * Schema.org/isAccessibleForFree
	 * A flag to signal that the item, event, or place is accessible for free.
	 *
	 * @property isAccessibleForFree
	 * @type Boolean
	 */
	isAccessibleForFree;

	/**
	 * Schema.org/maximumAttendeeCapacity
	 * The total number of individuals that may attend an event or venue.
	 *
	 * @property maximumAttendeeCapacity
	 * @type Integer
	 */
	maximumAttendeeCapacity;

	/**
	 * Schema.org/eventStatus
	 * An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.
	 *
	 * @property eventStatus
	 * @type EventStatusType
	 */
	eventStatus;

	/**
	 * Schema.org/maximumPhysicalAttendeeCapacity
	 * The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OfflineEventAttendanceMode]] (or the offline aspects, in the case of a [[MixedEventAttendanceMode]]). 
	 *
	 * @property maximumPhysicalAttendeeCapacity
	 * @type Integer
	 */
	maximumPhysicalAttendeeCapacity;

	/**
	 * Schema.org/subEvent
	 * An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference.
	 *
	 * @property subEvent
	 * @type Event
	 */
	subEvent;

	/**
	 * Schema.org/endDate
	 * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
	 *
	 * @property endDate
	 * @type Date
	 */
	endDate;

	/**
	 * Schema.org/attendee
	 * A person or organization attending the event.
	 *
	 * @property attendee
	 * @type Person
	 */
	attendee;

	/**
	 * Schema.org/recordedIn
	 * The CreativeWork that captured all or part of this Event.
	 *
	 * @property recordedIn
	 * @type CreativeWork
	 */
	recordedIn;

	/**
	 * Schema.org/about
	 * The subject matter of the content.
	 *
	 * @property about
	 * @type Thing
	 */
	about;

	/**
	 * Schema.org/inLanguage
	 * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
	 *
	 * @property inLanguage
	 * @type Language
	 */
	inLanguage;

	/**
	 * Schema.org/superEvent
	 * An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.
	 *
	 * @property superEvent
	 * @type Event
	 */
	superEvent;

	/**
	 * Schema.org/eventAttendanceMode
	 * The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix.
	 *
	 * @property eventAttendanceMode
	 * @type EventAttendanceModeEnumeration
	 */
	eventAttendanceMode;

	/**
	 * Schema.org/composer
	 * The person or organization who wrote a composition, or who is the composer of a work performed at some event.
	 *
	 * @property composer
	 * @type Person
	 */
	composer;

	/**
	 * Schema.org/performers
	 * The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor.
	 *
	 * @property performers
	 * @type Person
	 */
	performers;

	/**
	 * Schema.org/duration
	 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
	 *
	 * @property duration
	 * @type Duration
	 */
	duration;

	/**
	 * Schema.org/doorTime
	 * The time admission will commence.
	 *
	 * @property doorTime
	 * @type DateTime
	 */
	doorTime;

	/**
	 * Schema.org/funder
	 * A person or organization that supports (sponsors) something through some kind of financial contribution.
	 *
	 * @property funder
	 * @type Organization
	 */
	funder;

	/**
	 * Schema.org/remainingAttendeeCapacity
	 * The number of attendee places for an event that remain unallocated.
	 *
	 * @property remainingAttendeeCapacity
	 * @type Integer
	 */
	remainingAttendeeCapacity;

	/**
	 * Schema.org/location
	 * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
	 *
	 * @property location
	 * @type PostalAddress
	 */
	location;

	/**
	 * Schema.org/audience
	 * An intended audience, i.e. a group for whom something was created.
	 *
	 * @property audience
	 * @type Audience
	 */
	audience;

	/**
	 * Schema.org/maximumVirtualAttendeeCapacity
	 * The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OnlineEventAttendanceMode]] (or the online aspects, in the case of a [[MixedEventAttendanceMode]]). 
	 *
	 * @property maximumVirtualAttendeeCapacity
	 * @type Integer
	 */
	maximumVirtualAttendeeCapacity;

	/**
	 * Schema.org/typicalAgeRange
	 * The typical expected age range, e.g. '7-9', '11-'.
	 *
	 * @property typicalAgeRange
	 * @type Text
	 */
	typicalAgeRange;

}