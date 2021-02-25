/**
 *  Schema.org/SchemaEvent
 *  An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the [[offers]] property. Repeated events may be structured as separate SchemaEvent objects.
 * 
 *  @author schema.org
 *  @class SchemaEvent
 *  @module org.schema
 *  @extends Thing
 */
var SchemaEvent = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Thing.call(this);
    this.context = "http://schema.org/";
    this.type = "SchemaEvent";
};
SchemaEvent = stjs.extend(SchemaEvent, Thing, [], function(constructor, prototype) {
    /**
     *  Schema.org/about
     *  The subject matter of the content.
     * 
     *  @property about
     *  @type Thing
     */
    prototype.about = null;
    /**
     *  Schema.org/funder
     *  A person or organization that supports (sponsors) something through some kind of financial contribution.
     * 
     *  @property funder
     *  @type Person
     */
    prototype.funder = null;
    /**
     *  Schema.org/workFeatured
     *  A work featured in some event, e.g. exhibited in an ExhibitionEvent.
     *  Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).
     * 
     *  @property workFeatured
     *  @type CreativeWork
     */
    prototype.workFeatured = null;
    /**
     *  Schema.org/audience
     *  An intended audience, i.e. a group for whom something was created.
     * 
     *  @property audience
     *  @type Audience
     */
    prototype.audience = null;
    /**
     *  Schema.org/remainingAttendeeCapacity
     *  The number of attendee places for an event that remain unallocated.
     * 
     *  @property remainingAttendeeCapacity
     *  @type Integer
     */
    prototype.remainingAttendeeCapacity = null;
    /**
     *  Schema.org/actor
     *  An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property actor
     *  @type Person
     */
    prototype.actor = null;
    /**
     *  Schema.org/performers
     *  The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor.
     * 
     *  @property performers
     *  @type Organization
     */
    prototype.performers = null;
    /**
     *  Schema.org/endDate
     *  The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * 
     *  @property endDate
     *  @type DateTime
     */
    prototype.endDate = null;
    /**
     *  Schema.org/doorTime
     *  The time admission will commence.
     * 
     *  @property doorTime
     *  @type DateTime
     */
    prototype.doorTime = null;
    /**
     *  Schema.org/contributor
     *  A secondary contributor to the CreativeWork or SchemaEvent.
     * 
     *  @property contributor
     *  @type Organization
     */
    prototype.contributor = null;
    /**
     *  Schema.org/maximumAttendeeCapacity
     *  The total number of individuals that may attend an event or venue.
     * 
     *  @property maximumAttendeeCapacity
     *  @type Integer
     */
    prototype.maximumAttendeeCapacity = null;
    /**
     *  Schema.org/typicalAgeRange
     *  The typical expected age range, e.g. '7-9', '11-'.
     * 
     *  @property typicalAgeRange
     *  @type Text
     */
    prototype.typicalAgeRange = null;
    /**
     *  Schema.org/organizer
     *  An organizer of an SchemaEvent.
     * 
     *  @property organizer
     *  @type Person
     */
    prototype.organizer = null;
    /**
     *  Schema.org/attendees
     *  A person attending the event.
     * 
     *  @property attendees
     *  @type Person
     */
    prototype.attendees = null;
    /**
     *  Schema.org/aggregateRating
     *  The overall rating, based on a collection of reviews or ratings, of the item.
     * 
     *  @property aggregateRating
     *  @type AggregateRating
     */
    prototype.aggregateRating = null;
    /**
     *  Schema.org/subEvent
     *  An SchemaEvent that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference.
     * 
     *  @property subEvent
     *  @type SchemaEvent
     */
    prototype.subEvent = null;
    /**
     *  Schema.org/subEvents
     *  Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.
     * 
     *  @property subEvents
     *  @type SchemaEvent
     */
    prototype.subEvents = null;
    /**
     *  Schema.org/offers
     *  An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event.
     * 
     *  @property offers
     *  @type Offer
     */
    prototype.offers = null;
    /**
     *  Schema.org/attendee
     *  A person or organization attending the event.
     * 
     *  @property attendee
     *  @type Organization
     */
    prototype.attendee = null;
    /**
     *  Schema.org/workPerformed
     *  A work performed in some event, for example a play performed in a TheaterEvent.
     * 
     *  @property workPerformed
     *  @type CreativeWork
     */
    prototype.workPerformed = null;
    /**
     *  Schema.org/eventStatus
     *  An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.
     * 
     *  @property eventStatus
     *  @type EventStatusType
     */
    prototype.eventStatus = null;
    /**
     *  Schema.org/startDate
     *  The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * 
     *  @property startDate
     *  @type Date
     */
    prototype.startDate = null;
    /**
     *  Schema.org/director
     *  A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property director
     *  @type Person
     */
    prototype.director = null;
    /**
     *  Schema.org/superEvent
     *  An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.
     * 
     *  @property superEvent
     *  @type SchemaEvent
     */
    prototype.superEvent = null;
    /**
     *  Schema.org/duration
     *  The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
     * 
     *  @property duration
     *  @type Duration
     */
    prototype.duration = null;
    /**
     *  Schema.org/translator
     *  Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
     * 
     *  @property translator
     *  @type Person
     */
    prototype.translator = null;
    /**
     *  Schema.org/inLanguage
     *  The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
     * 
     *  @property inLanguage
     *  @type Language
     */
    prototype.inLanguage = null;
    /**
     *  Schema.org/previousStartDate
     *  Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.
     * 
     *  @property previousStartDate
     *  @type Date
     */
    prototype.previousStartDate = null;
    /**
     *  Schema.org/review
     *  A review of the item.
     * 
     *  @property review
     *  @type Review
     */
    prototype.review = null;
    /**
     *  Schema.org/sponsor
     *  A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     * 
     *  @property sponsor
     *  @type Organization
     */
    prototype.sponsor = null;
    /**
     *  Schema.org/location
     *  The location of for example where the event is happening, an organization is located, or where an action takes place.
     * 
     *  @property location
     *  @type PostalAddress
     */
    prototype.location = null;
    /**
     *  Schema.org/recordedIn
     *  The CreativeWork that captured all or part of this SchemaEvent.
     * 
     *  @property recordedIn
     *  @type CreativeWork
     */
    prototype.recordedIn = null;
    /**
     *  Schema.org/composer
     *  The person or organization who wrote a composition, or who is the composer of a work performed at some event.
     * 
     *  @property composer
     *  @type Organization
     */
    prototype.composer = null;
    /**
     *  Schema.org/isAccessibleForFree
     *  A flag to signal that the publication is accessible for free.
     * 
     *  @property isAccessibleForFree
     *  @type Boolean
     */
    prototype.isAccessibleForFree = null;
    /**
     *  Schema.org/performer
     *  A performer at the event&#x2014;for example, a presenter, musician, musical group or actor.
     * 
     *  @property performer
     *  @type Person
     */
    prototype.performer = null;
}, {about: "Thing", funder: "Person", workFeatured: "CreativeWork", audience: "Audience", actor: "Person", performers: "Organization", contributor: "Organization", organizer: "Person", attendees: "Person", aggregateRating: "AggregateRating", subEvent: "SchemaEvent", subEvents: "SchemaEvent", offers: "Offer", attendee: "Organization", workPerformed: "CreativeWork", eventStatus: "EventStatusType", director: "Person", superEvent: "SchemaEvent", duration: "Duration", translator: "Person", inLanguage: "Language", review: "Review", sponsor: "Organization", location: "PostalAddress", recordedIn: "CreativeWork", composer: "Organization", performer: "Person", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
