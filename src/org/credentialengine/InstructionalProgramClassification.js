/**
 *  credentialengine.org/InstructionalProgramClassification
 *  Class of concept schemes defining instructional program types such as the CIP codes in the U.S.
 *  @author credentialengine.org
 *  @class InstructionalProgramClassification
 *  @module org.credentialengine
 *  @extends CredentialFramework
 */
var InstructionalProgramClassification = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    CredentialFramework.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "InstructionalProgramClassification";
};
InstructionalProgramClassification = stjs.extend(InstructionalProgramClassification, CredentialFramework, [], null, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
