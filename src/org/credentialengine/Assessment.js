/**
 *  credentialengine.org/Assessment
 *  Direct, indirect, formative, and summative evaluation or estimation of the nature, ability, or quality of an entity, performance, or outcome of an action.
 *  @author credentialengine.org
 *  @class Assessment
 *  @module org.credentialengine
 */
var Assessment = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "Assessment");
};
Assessment = stjs.extend(Assessment, EcRemoteLinkedData, [], null, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
