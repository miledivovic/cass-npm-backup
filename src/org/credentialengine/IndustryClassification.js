/**
 *  credentialengine.org/IndustryClassification
 *  Class of of concept schemes defining industries such as NAICS in the U.S. and ESCO in the European Union.
 *  @author credentialengine.org
 *  @class IndustryClassification
 *  @module org.credentialengine
 *  @extends CredentialFramework
 */
var IndustryClassification = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    CredentialFramework.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "IndustryClassification";
};
IndustryClassification = stjs.extend(IndustryClassification, CredentialFramework, [], null, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
