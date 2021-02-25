/**
 *  Schema.org/ActionStatusType
 *  The status of an Action.
 * 
 *  @author schema.org
 *  @class ActionStatusType
 *  @module org.schema
 *  @extends Enumeration
 */
var ActionStatusType = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "ActionStatusType";
};
ActionStatusType = stjs.extend(ActionStatusType, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
