/**
 *  Credential list along with one time pad and session-based token for use in
 *  commit actions.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EbacCredentials
 *  @module org.cassproject
 */
module.exports = class EbacCredentials extends EcLinkedData{
    constructor(){
        super(Ebac.context, EbacCredentials.TYPE_0_4);
    }
    static TYPE_0_1 = "http://schema.eduworks.com/ebac/0.1/credentials";
    static TYPE_0_2 = "http://schema.eduworks.com/ebac/0.2/credentials";
    static TYPE_0_3 = "http://schema.cassproject.org/kbac/0.2/Credentials";
    static TYPE_0_4 = "https://schema.cassproject.org/kbac/0.4/Credentials";
    /**
     *  One time pad that may be used in password recovery. Base64 encoded.
     * 
     *  @property pad
     *  @type string
     */
    pad = null;
    /**
     *  Token provided by server to use in commit actions.
     * 
     *  @property token
     *  @type string
     */
    token = null;
    /**
     *  Credential array.
     * 
     *  @property credentials
     *  @type EbacCredential[]
     */
    credentials = null;
    /**
     *  Contact array.
     * 
     *  @property contacts
     *  @type EbacContact[]
     */
    contacts = null;
    upgrade() {
        EcLinkedData.upgrade.call(this);
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
    getTypes() {
        var a = new Array();
        a.push(EbacCredentials.TYPE_0_4);
        a.push(EbacCredentials.TYPE_0_3);
        a.push(EbacCredentials.TYPE_0_2);
        a.push(EbacCredentials.TYPE_0_1);
        return a;
    };
};
