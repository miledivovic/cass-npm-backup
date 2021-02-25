/**
 *  Encrypted JSON-LD object or string.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EbacEncryptedValue
 *  @module org.cassproject
 */
var EbacEncryptedValue = function() {
    EcRemoteLinkedData.call(this, Ebac.context, EbacEncryptedValue.myType);
};
EbacEncryptedValue = stjs.extend(EbacEncryptedValue, EcRemoteLinkedData, [], function(constructor, prototype) {
    constructor.TYPE_0_1 = "http://schema.eduworks.com/ebac/0.1/encryptedValue";
    constructor.TYPE_0_2 = "http://schema.eduworks.com/ebac/0.2/encryptedValue";
    constructor.TYPE_0_3 = "http://schema.cassproject.org/kbac/0.2/EncryptedValue";
    constructor.TYPE_0_4 = "https://schema.cassproject.org/kbac/0.4/EncryptedValue";
    constructor.myType = EbacEncryptedValue.TYPE_0_4;
    /**
     *  Optional Hint used to aid in search.
     *  Displays the type of the encrypted object.
     * 
     *  @property encryptedType
     *  @type string
     */
    prototype.encryptedType = null;
    /**
     *  Optional Hint used to aid in search.
     *  Displays the context of the encrypted object.
     * 
     *  @property encryptedContext
     *  @type string
     */
    prototype.encryptedContext = null;
    /**
     *  Base-64 encoded, AES encrypted form of the encrypted object (or string).
     * 
     *  @property payload
     *  @type string
     */
    prototype.payload = null;
    /**
     *  Optional Hint used to aid in search and display.
     *  Name of the inner encrypted object.
     * 
     *  @property name
     *  @type string
     */
    prototype.name = null;
    /**
     *  Array of EbacEncryptedSecret objects encoded in Base-64, encrypted using
     *  RSA public keys of owners, readers, or other parties to allow them
     *  access to the payload.
     * 
     *  @property secret
     *  @type string[]
     */
    prototype.secret = null;
    prototype.copyFrom = function(that) {
        var me = (this);
        for (var key in me) 
            delete me[key];
        var you = (that);
        for (var key in you) {
            if (me[key] == null) 
                me[key.replace("@", "")] = you[key];
        }
        if (!this.isAny(this.getTypes())) 
             throw new RuntimeException("Incompatible type: " + this.getFullType());
    };
    prototype.upgrade = function() {
        EcRemoteLinkedData.prototype.upgrade.call(this);
        if (EbacEncryptedValue.TYPE_0_1 == this.type) {
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(Ebac.context_0_2, EbacEncryptedValue.TYPE_0_2);
        }
        if (EbacEncryptedValue.TYPE_0_2 == this.getFullType()) {
            this.setContextAndType(Ebac.context_0_3, EbacEncryptedValue.TYPE_0_3);
        }
        if (EbacEncryptedValue.TYPE_0_3 == this.getFullType()) {
            this.setContextAndType(Ebac.context_0_4, EbacEncryptedValue.TYPE_0_4);
        }
    };
    prototype.getTypes = function() {
        var a = new Array();
        a.push(EbacEncryptedValue.TYPE_0_4);
        a.push(EbacEncryptedValue.TYPE_0_3);
        a.push(EbacEncryptedValue.TYPE_0_2);
        a.push(EbacEncryptedValue.TYPE_0_1);
        return a;
    };
}, {secret: {name: "Array", arguments: [null]}, owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
