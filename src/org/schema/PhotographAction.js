/**
 *  Schema.org/PhotographAction
 *  The act of capturing still images of objects using a camera.
 * 
 *  @author schema.org
 *  @class PhotographAction
 *  @module org.schema
 *  @extends CreateAction
 */
var PhotographAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "PhotographAction";
};
PhotographAction = stjs.extend(PhotographAction, CreateAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
