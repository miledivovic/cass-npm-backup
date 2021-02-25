/**
 *  The record used to request a rekey of a given public key
 */
var EcRekeyRequest = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "https://schema.cassproject.org/0.4/kbac", "RekeyRequest");
};
EcRekeyRequest = stjs.extend(EcRekeyRequest, EcRemoteLinkedData, [], function(constructor, prototype) {
    constructor.REKEY_ID_PREFIX = "rekey_";
    /**
     *  PEM encoded public key of the replacement (new) key
     *  @property rekeyPk
     *  @type string (PEM)
     */
    prototype.rekeyPk = null;
    /**
     *  SHA256 signature of the rekey request
     *  @property rekeySignature
     *  @type string (SHA256 signature)
     */
    prototype.rekeySignature = null;
    /**
     *  Generates the ID of the rekey request in the appropriate format
     * 
     *  {string} server      Base URL of the server's repository functionality.
     *  {EcPk}   oldKeyPk    The public key to replace
     *  @method generateRekeyRequestId
     */
    prototype.generateRekeyRequestId = function(server, oldKeyPk) {
        this.assignId(server, EcRekeyRequest.REKEY_ID_PREFIX + oldKeyPk.fingerprint());
    };
    /**
     *  Adds a signature to the rekey request and finalizes before save
     * 
     *  {EcPpk}  oldKeyPpk   The old PPK
     *  @method generateRekeyRequestId
     */
    prototype.finalizeRequest = function(oldKeyPpk) {
        this.rekeySignature = EcRsaOaep.signSha256(oldKeyPpk, this.toSignableJson());
    };
    /**
     *  Generates and populates a rekey request with the given information
     * 
     *  {String} server  Base URL of the server's repository functionality.
     *  {EcPpk}  oldKey  The old PPK
     *  {EcPpk}  newKey  The new PPK
     *  @method generateRekeyRequest
     */
    constructor.generateRekeyRequest = function(server, oldKey, newKey) {
        var err = new EcRekeyRequest();
        err.addOwner(newKey.toPk());
        err.rekeyPk = oldKey.toPk().toPem();
        err.generateRekeyRequestId(server, oldKey.toPk());
        err.finalizeRequest(oldKey);
        return err;
    };
    /**
     *  Encodes the object in a form where it is ready to be signed.
     *  This method is under long term review, and may change from version to version.
     * 
     *  @return ASCII-sort order encoded space-free and tab-free JSON-LD.
     *  @method toSignableJson
     */
    prototype.toSignableRekeyJson = function() {
        var d = JSON.parse(EcRemoteLinkedData.prototype.toSignableJson.call(this));
        delete (d)["rekeySignature"];
        var e = new EcLinkedData(d.context, d.type);
        e.copyFrom(d);
        return e.toJson();
    };
    /**
     *  Verifies both the integrity of the rekey request and the signed nonce of the old key. Returns false if either of these fail.
     *  @return True if the rekey request is valid and maintains its cryptographically integrity.
     */
    prototype.verify = function() {
        if (!EcRemoteLinkedData.prototype.verify.call(this)) 
            return false;
        return EcRsaOaep.verifySha256(EcPk.fromPem(this.rekeyPk), this.toSignableRekeyJson(), this.rekeySignature);
    };
    prototype.addRekeyRequestToForwardingTable = function() {
        if (!this.verify()) 
            return;
        if (this.owner != null) 
            EcRemoteLinkedData.forwardKey(this.rekeyPk, this.owner[0]);
    };
}, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
