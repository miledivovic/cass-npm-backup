/**
 *  credentialengine.org/CredentialAssertion
 *  Representation of a credential awarded to a person.
 *  @author credentialengine.org
 *  @class CredentialAssertion
 *  @module org.credentialengine
 */
var CredentialAssertion = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "CredentialAssertion");
};
CredentialAssertion = stjs.extend(CredentialAssertion, EcRemoteLinkedData, [], null, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
