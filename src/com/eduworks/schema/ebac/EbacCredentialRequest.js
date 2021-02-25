/**
 *  Message used to retrieve credentials from a remote system.
 *  <p>
 *  TODO: Vulnerable to replay attacks.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EbacCredentialRequest
 *  @module org.cassproject
 */
var EbacCredentialRequest = function() {
    EcLinkedData.call(this, Ebac.context, EbacCredentialRequest.TYPE_0_4);
};
EbacCredentialRequest = stjs.extend(EbacCredentialRequest, EcLinkedData, [], function(constructor, prototype) {
    constructor.TYPE_0_1 = "http://schema.eduworks.com/ebac/0.1/credentialRequest";
    constructor.TYPE_0_2 = "http://schema.eduworks.com/ebac/0.2/credentialRequest";
    constructor.TYPE_0_3 = "http://schema.cassproject.org/kbac/0.2/CredentialRequest";
    constructor.TYPE_0_4 = "https://schema.cassproject.org/kbac/0.4/CredentialRequest";
    /**
     *  Hashed username.
     * 
     *  @property username
     *  @type string
     */
    prototype.username = null;
    /**
     *  Hashed password to authorize request.
     * 
     *  @property password
     *  @type string
     */
    prototype.password = null;
    prototype.upgrade = function() {
        EcLinkedData.prototype.upgrade.call(this);
        if (EbacCredentialRequest.TYPE_0_1 == this.type) {
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(Ebac.context_0_2, EbacCredentialRequest.TYPE_0_2);
        }
        if (EbacCredentialRequest.TYPE_0_2 == this.getFullType()) {
            this.setContextAndType(Ebac.context_0_3, EbacCredentialRequest.TYPE_0_3);
        }
        if (EbacCredentialRequest.TYPE_0_3 == this.getFullType()) {
            this.setContextAndType(Ebac.context_0_4, EbacCredentialRequest.TYPE_0_4);
        }
    };
    prototype.getTypes = function() {
        var a = new Array();
        a.push(EbacCredentialRequest.TYPE_0_4);
        a.push(EbacCredentialRequest.TYPE_0_3);
        a.push(EbacCredentialRequest.TYPE_0_2);
        a.push(EbacCredentialRequest.TYPE_0_1);
        return a;
    };
}, {atProperties: {name: "Array", arguments: [null]}}, {});
