/**
 *  credentialengine.org/Agent
 *  Organization or person that acts or has the power to act.
 *  Broad type that includes both organizations and people who play roles in the lifecycle of a credential.
 *  @author credentialengine.org
 *  @class Agent
 *  @module org.credentialengine
 */
var Agent = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "Agent");
};
Agent = stjs.extend(Agent, EcRemoteLinkedData, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/hasAlignmentMap
     *  Alignment map owned by the agent.
     *  @property hasAlignmentMap
     *  @type AlignmentMap
     */
    prototype.hasAlignmentMap = null;
}, {hasAlignmentMap: "AlignmentMap", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
