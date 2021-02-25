/**
 *  credentialengine.org/ContactPoint
 *  Means of contacting an organization or its representative.
 *  For example, a public relations email address or phone number.
 *  @author credentialengine.org
 *  @class ContactPoint
 *  @module org.credentialengine
 */
var ContactPoint = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "ContactPoint");
};
ContactPoint = stjs.extend(ContactPoint, EcRemoteLinkedData, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/contactType
     *  Text identifying the type of service provided by an organizational contact.
     *  A person or organization may have different contact points for different services. The contact type property provides for adding text to identity the service; e.g., "toll-free number" or "support for hearing-impaired callers".
     *  @property contactType
     *  @type langString
     */
    prototype.contactType = null;
    /**
     *  http://purl.org/ctdl/terms/email
     *  Email address of the organization or person.
     *  @property email
     *  @type string
     */
    prototype.email = null;
    /**
     *  http://purl.org/ctdl/terms/faxNumber
     *  Fax number.
     *  @property faxNumber
     *  @type string
     */
    prototype.faxNumber = null;
    /**
     *  http://purl.org/ctdl/terms/name
     *  Name or title of the entity.
     *  @property name
     *  @type langString
     */
    prototype.name = null;
    /**
     *  http://purl.org/ctdl/terms/socialMedia
     *  Social media access point for an agent or an agent's contact point.
     *  @property socialMedia
     *  @type anyURI
     */
    prototype.socialMedia = null;
    /**
     *  http://purl.org/ctdl/terms/telephone
     *  Telephone number.
     *  @property telephone
     *  @type string
     */
    prototype.telephone = null;
}, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
