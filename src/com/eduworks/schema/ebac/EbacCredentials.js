/**
 *  Credential list along with one time pad and session-based token for use in
 *  commit actions.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EbacCredentials
 *  @module org.cassproject
 */
var EbacCredentials = function() {
    EcLinkedData.call(this, Ebac.context, EbacCredentials.TYPE_0_4);
};
EbacCredentials = stjs.extend(EbacCredentials, EcLinkedData, [], function(constructor, prototype) {
    constructor.TYPE_0_1 = "http://schema.eduworks.com/ebac/0.1/credentials";
    constructor.TYPE_0_2 = "http://schema.eduworks.com/ebac/0.2/credentials";
    constructor.TYPE_0_3 = "http://schema.cassproject.org/kbac/0.2/Credentials";
    constructor.TYPE_0_4 = "https://schema.cassproject.org/kbac/0.4/Credentials";
    /**
     *  One time pad that may be used in password recovery. Base64 encoded.
     * 
     *  @property pad
     *  @type string
     */
    prototype.pad = null;
    /**
     *  Token provided by server to use in commit actions.
     * 
     *  @property token
     *  @type string
     */
    prototype.token = null;
    /**
     *  Credential array.
     * 
     *  @property credentials
     *  @type EbacCredential[]
     */
    prototype.credentials = null;
    /**
     *  Contact array.
     * 
     *  @property contacts
     *  @type EbacContact[]
     */
    prototype.contacts = null;
    prototype.upgrade = function() {
        EcLinkedData.prototype.upgrade.call(this);
        if (EbacCredentials.TYPE_0_1.equals(this.type)) {
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(Ebac.context_0_2, EbacCredentials.TYPE_0_2);
        }
        if (EbacCredentials.TYPE_0_2.equals(this.getFullType())) {
            this.setContextAndType(Ebac.context_0_3, EbacCredentials.TYPE_0_3);
        }
        if (EbacCredentials.TYPE_0_3.equals(this.getFullType())) {
            this.setContextAndType(Ebac.context_0_4, EbacCredentials.TYPE_0_4);
        }
    };
    prototype.getTypes = function() {
        var a = new Array();
        a.push(EbacCredentials.TYPE_0_4);
        a.push(EbacCredentials.TYPE_0_3);
        a.push(EbacCredentials.TYPE_0_2);
        a.push(EbacCredentials.TYPE_0_1);
        return a;
    };
}, {credentials: {name: "Array", arguments: ["EbacCredential"]}, contacts: {name: "Array", arguments: ["EbacContact"]}, atProperties: {name: "Array", arguments: [null]}}, {});
