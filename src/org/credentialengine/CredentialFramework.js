/**
 *  credentialengine.org/CredentialFramework
 *  Class of all structured sets of conceptual entities intentionally designed for use as value vocabulary terms for description and classification in the credentialing context.
 *  The class includes, but is not limited to, subclasses of specialized concept schemes describing industries, occupations, professions, learning contexts and jobs, as well as specialized subject concept schemes, assessment rubrics, proficiency scales, and competency frameworks.
 *  @author credentialengine.org
 *  @class CredentialFramework
 *  @module org.credentialengine
 */
var CredentialFramework = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "CredentialFramework");
};
CredentialFramework = stjs.extend(CredentialFramework, EcRemoteLinkedData, [], null, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
