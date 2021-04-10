/**
 *  Schema.org/PerformAction
 *  The act of participating in performance arts.
 * 
 *  @author schema.org
 *  @class PerformAction
 *  @module org.schema
 *  @extends PlayAction
 */
var PerformAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    PlayAction.call(this);
    this.context = "http://schema.org/";
    this.type = "PerformAction";
};
PerformAction = stjs.extend(PerformAction, PlayAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/entertainmentBusiness
     *  A sub property of location. The entertainment business where the action occurred.
     * 
     *  @property entertainmentBusiness
     *  @type EntertainmentBusiness
     */
    entertainmentBusiness = null;
}, {entertainmentBusiness: "EntertainmentBusiness", audience: "Audience", event: "SchemaEvent", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
