/**
 *  credentialengine.org/CostManifest
 *  Entity that describes a set of costs maintained at, and applicable across the organizational and/or sub-organizational level.
 *  Instances of these ceterms:CostManifest entities are intended to be referenced by other entities to augment the process of describing their costs.
 *  @author credentialengine.org
 *  @class CostManifest
 *  @module org.credentialengine
 */
var CostManifest = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "CostManifest");
};
CostManifest = stjs.extend(CostManifest, EcRemoteLinkedData, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/costDetails
     *  Webpage or online document containing human-readable, in-depth information about costs.
     *  @property costDetails
     *  @type anyURI
     */
    prototype.costDetails = null;
    /**
     *  http://purl.org/ctdl/terms/costManifestOf
     *  Organization maintaining the cost manifest.
     *  @property costManifestOf
     *  @type CredentialOrganization | QACredentialOrganization
     */
    prototype.costManifestOf = null;
    /**
     *  http://purl.org/ctdl/terms/ctid
     *  Globally unique Credential Transparency Identifier (CTID) by which the creator, owner or provider of a credential, learning opportunity competency, or assessment recognizes the entity in transactions with the external environment (e.g., in verifiable claims involving a credential).
     *  The CTID is the equivalent of a version identifier for the resource. Different versions of a resource are considered distinct expressions and each must be assigned its own CTID. Each version of a resource can have only one CTID assigned. However, a single version of a resource may have distinct identifier values for both the ctid property and the credentialId property. In such a case both identifiers will be recognized by the resource creator/owner/provider in transactions with the external environment.
     *  @property ctid
     *  @type string
     */
    prototype.ctid = null;
    /**
     *  http://purl.org/ctdl/terms/description
     *  Statement, characterization or account of the entity.
     *  @property description
     *  @type langString
     */
    prototype.description = null;
    /**
     *  http://purl.org/ctdl/terms/endDate
     *  Date some event or activity ends.
     *  @property endDate
     *  @type date
     */
    prototype.endDate = null;
    /**
     *  http://purl.org/ctdl/terms/estimatedCost
     *  Estimated cost of a credential, learning opportunity or assessment.
     *  @property estimatedCost
     *  @type CostProfile
     */
    prototype.estimatedCost = null;
    /**
     *  http://purl.org/ctdl/terms/name
     *  Name or title of the entity.
     *  @property name
     *  @type langString
     */
    prototype.name = null;
    /**
     *  http://purl.org/ctdl/terms/startDate
     *  Date the validity or usefulness of the information in this resource begins.
     *  @property startDate
     *  @type date
     */
    prototype.startDate = null;
}, {costManifestOf: "Object", estimatedCost: "CostProfile", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
