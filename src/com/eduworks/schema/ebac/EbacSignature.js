/**
 *  Signature used to authorize movement of data on behalf of a private-key
 *  holding owner.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EbacSignature
 *  @module org.cassproject
 */
var EbacSignature = function() {
    EcLinkedData.call(this, Ebac.context, EbacSignature.TYPE_0_4);
};
EbacSignature = stjs.extend(EbacSignature, EcLinkedData, [], function(constructor, prototype) {
    constructor.TYPE_0_1 = "http://schema.eduworks.com/ebac/0.1/timeLimitedSignature";
    constructor.TYPE_0_2 = "http://schema.eduworks.com/ebac/0.2/timeLimitedSignature";
    constructor.TYPE_0_3 = "http://schema.cassproject.org/kbac/0.2/TimeLimitedSignature";
    constructor.TYPE_0_4 = "https://schema.cassproject.org/kbac/0.4/TimeLimitedSignature";
    /**
     *  The public key of the authorizing party in PEM format.
     * 
     *  @property owner
     *  @type string
     */
    prototype.owner = null;
    /**
     *  The time in number of milliseconds since midnight of January 1, 1970
     *  00:00:00 UTC that this signature is authorized to move data.
     * 
     *  @property expiry
     *  @type long
     */
    prototype.expiry = null;
    /**
     *  The signature of this object, having signed the object, having been
     *  encoded in JSON with no space or tabs in ASCII sort order, having no
     *  value for the signature at the time of signing.
     * 
     *  @property signature
     *  @type string
     */
    prototype.signature = null;
    /**
     *  The server authorized to move data. If this is empty, the signature may
     *  be used by a server to ask for data from other servers.
     * 
     *  @property server
     *  @type string
     */
    prototype.server = null;
    prototype.upgrade = function() {
        EcLinkedData.prototype.upgrade.call(this);
    };
    prototype.getTypes = function() {
        var a = new Array();
        a.push(EbacSignature.TYPE_0_4);
        a.push(EbacSignature.TYPE_0_3);
        a.push(EbacSignature.TYPE_0_2);
        a.push(EbacSignature.TYPE_0_1);
        return a;
    };
}, {atProperties: {name: "Array", arguments: [null]}}, {});
