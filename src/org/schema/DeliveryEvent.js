/**
 *  Schema.org/DeliveryEvent
 *  An event involving the delivery of an item.
 * 
 *  @author schema.org
 *  @class DeliveryEvent
 *  @module org.schema
 *  @extends SchemaEvent
 */
var DeliveryEvent = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    SchemaEvent.call(this);
    this.context = "http://schema.org/";
    this.type = "DeliveryEvent";
};
DeliveryEvent = stjs.extend(DeliveryEvent, SchemaEvent, [], function(constructor, prototype) {
    /**
     *  Schema.org/hasDeliveryMethod
     *  Method used for delivery or shipping.
     * 
     *  @property hasDeliveryMethod
     *  @type DeliveryMethod
     */
    hasDeliveryMethod = null;
    /**
     *  Schema.org/availableThrough
     *  After this date, the item will no longer be available for pickup.
     * 
     *  @property availableThrough
     *  @type DateTime
     */
    availableThrough = null;
    /**
     *  Schema.org/availableFrom
     *  When the item is available for pickup from the store, locker, etc.
     * 
     *  @property availableFrom
     *  @type DateTime
     */
    availableFrom = null;
    /**
     *  Schema.org/accessCode
     *  Password, PIN, or access code needed for delivery (e.g. from a locker).
     * 
     *  @property accessCode
     *  @type Text
     */
    accessCode = null;
}, {hasDeliveryMethod: "DeliveryMethod", about: "Thing", funder: "Person", workFeatured: "CreativeWork", audience: "Audience", actor: "Person", performers: "Organization", contributor: "Organization", organizer: "Person", attendees: "Person", aggregateRating: "AggregateRating", subEvent: "SchemaEvent", subEvents: "SchemaEvent", offers: "Offer", attendee: "Organization", workPerformed: "CreativeWork", eventStatus: "EventStatusType", director: "Person", superEvent: "SchemaEvent", duration: "Duration", translator: "Person", inLanguage: "Language", review: "Review", sponsor: "Organization", location: "PostalAddress", recordedIn: "CreativeWork", composer: "Organization", performer: "Person", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
