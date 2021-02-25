/**
 *  Contact Grant that is used to share your public key with another user
 * 
 *  @author fritz.ray@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  @module com.eduworks.ec
 *  @class EcContact
 *  @extends EbacContactGrant
 *  @constructor
 */
var EcContactGrant = function() {
    EbacContactGrant.call(this);
};
EcContactGrant = stjs.extend(EcContactGrant, EbacContactGrant, [], function(constructor, prototype) {
    /**
     *  Verifies that the contact grant is valid
     * 
     *  @return {boolean}
     *  true if valid, false if not
     */
    prototype.valid = function() {
        if (!this.verify()) 
            return false;
        if (this.invalid()) 
            return false;
        var found = false;
        for (var i = 0; i < EcIdentityManager.ids.length; i++) {
            if (EcRsaOaep.verify(EcIdentityManager.ids[i].ppk.toPk(), this.responseToken, this.responseSignature)) 
                found = true;
        }
        return found;
    };
}, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
