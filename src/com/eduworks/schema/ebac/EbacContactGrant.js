/**
 *  AES encrypted public key and display name message.
 *  Used to grant access to a contact.
 *  Contains Initialization Vectors, but not secrets.
 *  Used to encrypt public identities for storage on remote systems.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EbacContactGrant
 *  @module org.cassproject
 */
module.exports = class EbacContactGrant extends EcRemoteLinkedData{
    constructor(){
        super(Ebac.context, EbacContactGrant.TYPE_0_4);
    }
    static TYPE_0_1 = "http://schema.eduworks.com/ebac/0.1/contactGrant";
    static TYPE_0_2 = "http://schema.eduworks.com/ebac/0.2/contactGrant";
    static TYPE_0_3 = "http://schema.cassproject.org/kbac/0.2/ContactGrant";
    static TYPE_0_4 = "https://schema.cassproject.org/kbac/0.4/ContactGrant";
    /**
     *  Public key being granted to the owner of this message.
     * 
     *  @property pk
     *  @type string(pem)
     */
    pk = null;
    /**
     *  Display name of the contact.
     * 
     *  @property displayName
     *  @type string
     */
    displayName = null;
    /**
     *  Source server of the contact.
     * 
     *  @property source
     *  @type string
     */
    source = null;
    /**
     *  Response token used to validate that this grant is in response to a contact request you sent.
     * 
     *  @property responseToken
     *  @type string
     */
    responseToken = null;
    /**
     *  Signature (Base64 encoded) of the response token to verify against your own public key
     *  to ensure that this grant is in response to a contact request you sent.
     * 
     *  @property responseSignature
     *  @type string
     */
    responseSignature = null;
    upgrade() {
        super.upgrade();
        if (EbacContactGrant.TYPE_0_1.equals(this.type)) {
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(Ebac.context_0_2, EbacContactGrant.TYPE_0_2);
        }
        if (EbacContactGrant.TYPE_0_2.equals(this.getFullType())) {
            this.setContextAndType(Ebac.context_0_3, EbacContactGrant.TYPE_0_3);
        }
        if (EbacContactGrant.TYPE_0_3.equals(this.getFullType())) {
            this.setContextAndType(Ebac.context_0_4, EbacContactGrant.TYPE_0_4);
        }
    };
    getTypes() {
        var a = [];
        a.push(EbacContactGrant.TYPE_0_4);
        a.push(EbacContactGrant.TYPE_0_3);
        a.push(EbacContactGrant.TYPE_0_2);
        a.push(EbacContactGrant.TYPE_0_1);
        return a;
    };
};
