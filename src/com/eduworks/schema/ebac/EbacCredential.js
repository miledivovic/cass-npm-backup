/**
 *  AES encrypted private key and display name. Contains Initialization Vectors,
 *  but not secrets. Used to encrypt private identities for storage on remote
 *  systems.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EbacCredential
 *  @module org.cassproject
 */
var EbacCredential = function() {
    EcLinkedData.call(this, Ebac.context, EbacCredential.TYPE_0_4);
};
EbacCredential = stjs.extend(EbacCredential, EcLinkedData, [], function(constructor, prototype) {
    constructor.TYPE_0_1 = "http://schema.eduworks.com/ebac/0.1/credential";
    constructor.TYPE_0_2 = "http://schema.eduworks.com/ebac/0.2/credential";
    constructor.TYPE_0_3 = "http://schema.cassproject.org/kbac/0.2/Credential";
    constructor.TYPE_0_4 = "https://schema.cassproject.org/kbac/0.4/Credential";
    /**
     *  AES Initialization Vector used to decode PPK. Base64 encoded.
     * 
     *  @property iv
     *  @type string
     */
    prototype.iv = null;
    /**
     *  AES encrypted Private Key in PEM form.
     * 
     *  @property ppk
     *  @type string
     */
    prototype.ppk = null;
    /**
     *  AES Initialization Vector used to decode displayName. Base64 encoded.
     * 
     *  @property displayNameIv
     *  @type string
     */
    prototype.displayNameIv = null;
    /**
     *  AES encrypted display name for identity.
     * 
     *  @property displayName
     *  @type string
     */
    prototype.displayName = null;
    prototype.upgrade = function() {
        EcLinkedData.prototype.upgrade.call(this);
        if (EbacCredential.TYPE_0_1.equals(this.type)) {
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(Ebac.context_0_2, EbacCredential.TYPE_0_2);
        }
        if (EbacCredential.TYPE_0_2.equals(this.getFullType())) {
            this.setContextAndType(Ebac.context_0_3, EbacCredential.TYPE_0_3);
        }
        if (EbacCredential.TYPE_0_3.equals(this.getFullType())) {
            this.setContextAndType(Ebac.context_0_4, EbacCredential.TYPE_0_4);
        }
    };
    prototype.getTypes = function() {
        var a = new Array();
        a.push(EbacCredential.TYPE_0_4);
        a.push(EbacCredential.TYPE_0_3);
        a.push(EbacCredential.TYPE_0_2);
        a.push(EbacCredential.TYPE_0_1);
        return a;
    };
}, {atProperties: {name: "Array", arguments: [null]}}, {});
