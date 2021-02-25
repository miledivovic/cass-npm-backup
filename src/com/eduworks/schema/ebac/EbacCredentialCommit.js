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
var EbacCredentialCommit = function() {
    EcLinkedData.call(this, Ebac.context, EbacCredentialCommit.TYPE_0_4);
    this.credentials = new EbacCredentials();
};
EbacCredentialCommit = stjs.extend(EbacCredentialCommit, EcLinkedData, [], function(constructor, prototype) {
    constructor.TYPE_0_1 = "http://schema.eduworks.com/ebac/0.1/credentialCommit";
    constructor.TYPE_0_2 = "http://schema.eduworks.com/ebac/0.2/credentialCommit";
    constructor.TYPE_0_3 = "http://schema.cassproject.org/kbac/0.2/CredentialCommit";
    constructor.TYPE_0_4 = "https://schema.cassproject.org/kbac/0.4/CredentialCommit";
    /**
     *  Hashed username.
     * 
     *  @property username
     *  @type string
     */
    prototype.username = null;
    /**
     *  Hashed password to authorize commit.
     * 
     *  @property password
     *  @type string
     */
    prototype.password = null;
    /**
     *  Token provided to client when previously executed Request was done. May
     *  be empty if this is used as part of Create action.
     * 
     *  @property token
     *  @type string
     */
    prototype.token = null;
    /**
     *  List of credentials to commit to the login server storage.
     * 
     *  @property credentials
     *  @type EbacCredentials
     */
    prototype.credentials = null;
    prototype.upgrade = function() {
        EcLinkedData.prototype.upgrade.call(this);
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
    prototype.getTypes = function() {
        var a = new Array();
        a.push(EbacCredentialCommit.TYPE_0_4);
        a.push(EbacCredentialCommit.TYPE_0_3);
        a.push(EbacCredentialCommit.TYPE_0_2);
        a.push(EbacCredentialCommit.TYPE_0_1);
        return a;
    };
}, {credentials: "EbacCredentials", atProperties: {name: "Array", arguments: [null]}}, {});
