/**
 *  Message used to commit credentials to a remote login server.
 *  <p>
 *  TODO: Vulnerable to replay attacks. Token field prevents some replay
 *  attacks.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EbacCredentialCommit
 *  @module org.cassproject
 */
module.exports = class EbacCredentialCommit extends EcLinkedData{
    constructor(){
        super(Ebac.context, EbacCredentialCommit.TYPE_0_4);
        this.credentials = new EbacCredentials();
    }
    static TYPE_0_1 = "http://schema.eduworks.com/ebac/0.1/credentialCommit";
    static TYPE_0_2 = "http://schema.eduworks.com/ebac/0.2/credentialCommit";
    static TYPE_0_3 = "http://schema.cassproject.org/kbac/0.2/CredentialCommit";
    static TYPE_0_4 = "https://schema.cassproject.org/kbac/0.4/CredentialCommit";
    /**
     *  Hashed username.
     * 
     *  @property username
     *  @type string
     */
    username = null;
    /**
     *  Hashed password to authorize commit.
     * 
     *  @property password
     *  @type string
     */
    password = null;
    /**
     *  Token provided to client when previously executed Request was done. May
     *  be empty if this is used as part of Create action.
     * 
     *  @property token
     *  @type string
     */
    token = null;
    /**
     *  List of credentials to commit to the login server storage.
     * 
     *  @property credentials
     *  @type EbacCredentials
     */
    credentials = null;
    upgrade() {
        EcLinkedData.upgrade.call(this);
        if (EbacCredentialCommit.TYPE_0_1.equals(this.type)) {
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(Ebac.context_0_2, EbacCredentialCommit.TYPE_0_2);
        }
        if (EbacCredentialCommit.TYPE_0_2.equals(this.getFullType())) {
            this.setContextAndType(Ebac.context_0_3, EbacCredentialCommit.TYPE_0_3);
        }
        if (EbacCredentialCommit.TYPE_0_3.equals(this.getFullType())) {
            this.setContextAndType(Ebac.context_0_4, EbacCredentialCommit.TYPE_0_4);
        }
    };
    getTypes() {
        var a = [];
        a.push(EbacCredentialCommit.TYPE_0_4);
        a.push(EbacCredentialCommit.TYPE_0_3);
        a.push(EbacCredentialCommit.TYPE_0_2);
        a.push(EbacCredentialCommit.TYPE_0_1);
        return a;
    };
};
