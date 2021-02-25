/**
 *  Schema.org/EventStatusType
 *  EventStatusType is an enumeration type whose instances represent several states that an SchemaEvent may be in.
 * 
 *  @author schema.org
 *  @class EventStatusType
 *  @module org.schema
 *  @extends Enumeration
 */
var EventStatusType = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "EventStatusType";
};
EventStatusType = stjs.extend(EventStatusType, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
