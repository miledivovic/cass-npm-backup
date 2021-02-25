/**
 *  Schema.org/AssignAction
 *  The act of allocating an action/event/task to some destination (someone or something).
 * 
 *  @author schema.org
 *  @class AssignAction
 *  @module org.schema
 *  @extends AllocateAction
 */
var AssignAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    AllocateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "AssignAction";
};
AssignAction = stjs.extend(AssignAction, AllocateAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
