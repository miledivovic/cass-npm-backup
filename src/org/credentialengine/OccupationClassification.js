/**
 *  credentialengine.org/OccupationClassification
 *  Class of concept schemes identifying occupations such as the Standard Occupational Classification (SOC) system in the U.S. and the European Skills/Competences, Qualifications and Occupations (ESCO).
 *  @author credentialengine.org
 *  @class OccupationClassification
 *  @module org.credentialengine
 *  @extends CredentialFramework
 */
var OccupationClassification = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    CredentialFramework.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "OccupationClassification";
};
OccupationClassification = stjs.extend(OccupationClassification, CredentialFramework, [], null, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
