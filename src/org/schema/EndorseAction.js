/**
 *  Schema.org/EndorseAction
 *  An agent approves/certifies/likes/supports/sanction an object.
 * 
 *  @author schema.org
 *  @class EndorseAction
 *  @module org.schema
 *  @extends ReactAction
 */
var EndorseAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    ReactAction.call(this);
    this.context = "http://schema.org/";
    this.type = "EndorseAction";
};
EndorseAction = stjs.extend(EndorseAction, ReactAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/endorsee
     *  A sub property of participant. The person/organization being supported.
     * 
     *  @property endorsee
     *  @type Organization
     */
    endorsee = null;
}, {endorsee: "Organization", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
