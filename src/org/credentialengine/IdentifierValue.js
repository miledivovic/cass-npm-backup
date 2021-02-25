/**
 *  credentialengine.org/IdentifierValue
 *  Alphanumeric Identifier value.
 *  @author credentialengine.org
 *  @class IdentifierValue
 *  @module org.credentialengine
 *  @extends identifier
 */
var IdentifierValue = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "IdentifierValue");
};
IdentifierValue = stjs.extend(IdentifierValue, EcRemoteLinkedData, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/description
     *  Statement, characterization or account of the entity.
     *  @property description
     *  @type langString
     */
    prototype.description = null;
    /**
     *  http://purl.org/ctdl/terms/identifierType
     *  Formal name or acronym of the identifier type such as ISBN and ISSN.
     *  @property identifierType
     *  @type langString
     */
    prototype.identifierType = null;
    /**
     *  http://purl.org/ctdl/terms/identifierValueCode
     *  Alphanumeric string identifier of the entity.
     *  Where a formal identification system exists for the identifier, recommended best practice is to use a string conforming to that system.
     *  @property identifierValueCode
     *  @type string
     */
    prototype.identifierValueCode = null;
    /**
     *  http://purl.org/ctdl/terms/name
     *  Name or title of the entity.
     *  @property name
     *  @type langString
     */
    prototype.name = null;
}, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
