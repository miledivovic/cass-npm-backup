/**
 *  credentialengine.org/FinancialAssistanceProfile
 *  Entity that describes financial assistance that is offered or available.
 *  @author credentialengine.org
 *  @class FinancialAssistanceProfile
 *  @module org.credentialengine
 */
var FinancialAssistanceProfile = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "FinancialAssistanceProfile");
};
FinancialAssistanceProfile = stjs.extend(FinancialAssistanceProfile, EcRemoteLinkedData, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/description
     *  Statement, characterization or account of the entity.
     *  @property description
     *  @type langString
     */
    prototype.description = null;
    /**
     *  http://purl.org/ctdl/terms/name
     *  Name or title of the entity.
     *  @property name
     *  @type langString
     */
    prototype.name = null;
    /**
     *  http://purl.org/ctdl/terms/subjectWebpage
     *  The webpage that describes this entity.
     *  The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
     *  @property subjectWebpage
     *  @type anyURI
     */
    prototype.subjectWebpage = null;
}, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
