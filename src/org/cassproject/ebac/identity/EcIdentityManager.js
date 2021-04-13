/**
 *  Manages identities and contacts, provides hooks to respond to identity and
 *  contact events, and builds signatures and signature sheets for authorizing
 *  movement of data. Also provides helper functions for identity management and
 *  reads the users contacts on application start with a static static that
 *  pulls them out of any temporary storage
 * 
 *  @author fritz.ray@eduworks.com
 *  @module com.eduworks.ec
 *  @class EcIdentityManager
 *  @static
 */
module.exports = class EcIdentityManager{
    static constructor(){
        EcIdentityManager.main();
    }
    /**
     *  The current user's owned identities (keys+displayName)
     * 
     *  @property ids
     *  @type EcIdentity[]
     *  @static
     */
    static ids = new Array();
    /**
     *  Contacts (Keys that we do not own)
     * 
     *  @property contacts
     *  @type EcContact[]
     *  @static
     */
    static contacts = new Array();
    /**
     *  Identity change hook.
     * 
     *  @property onIdentityChanged
     *  @type Callback1<EcIdentity>
     *  @static
     */
    static onIdentityChanged = null;
    /**
     *  Contacts change hook.
     * 
     *  @property onContactChanged
     *  @type Callback1<EcIdentity>
     *  @static
     */
    static onContactChanged = null;
    static signatureSheetCaching = false;
    static signatureSheetCache = new Object();
    static async = true;
    static main(args) {
        EcIdentityManager.readContacts();
    };
    /**
     *  Trigger for the onIdentityChanged hook
     * 
     *  @param {EcIdentity} identity Identity that has changed
     *  @memberOf EcIdentityManager
     *  @method identityChanged
     *  @static
     */
    static identityChanged(identity) {
        if (EcIdentityManager.onIdentityChanged != null) {
            EcIdentityManager.onIdentityChanged(identity);
        }
    };
    /**
     *  Trigger for the onContactChanged hook
     * 
     *  @param {EcContact} contact Contact that has changed
     *  @memberOf EcIdentityManager
     *  @method contactChanged
     *  @static
     */
    static contactChanged(contact) {
        if (EcIdentityManager.onContactChanged != null) {
            EcIdentityManager.onContactChanged(contact);
        }
        EcIdentityManager.saveContacts();
    };
    /**
     *  Reads contact data from localstorage.
     * 
     *  @memberOf EcIdentityManager
     *  @method readContacts
     *  @static
     */
    static readContacts() {
        var localStore = localStorage["contacts"];
        if (localStore == null) {
            return;
        }
        var c = JSON.parse(localStore);
        for (var i = 0; i < c.length; i++) {
            var contact = new EcContact();
            var o = c[i];
            var props = (o);
            contact.displayName = props["displayName"];
            contact.pk = EcPk.fromPem(props["pk"]);
            contact.source = props["source"];
            var cont = false;
            for (var j = 0; j < EcIdentityManager.contacts.length; j++) {
                if (EcIdentityManager.contacts[j].pk.toPem() == contact.pk.toPem()) {
                    cont = true;
                }
            }
            if (cont) {
                continue;
            }
            EcIdentityManager.contacts.push(contact);
        }
    };
    /**
     *  Writes contact data to localstorage.
     * 
     *  @memberOf EcIdentityManager
     *  @method saveContacts
     *  @static
     */
    static saveContacts() {
        var c = new Array();
        for (var i = 0; i < EcIdentityManager.contacts.length; i++) {
            var o = new Object();
            var props = (o);
            var contact = EcIdentityManager.contacts[i];
            props["displayName"] = contact.displayName;
            props["pk"] = contact.pk.toPem();
            props["source"] = contact.source;
            c.push(o);
        }
        localStorage["contacts"] = JSON.stringify(c);
    };
    /**
     *  Reads contact data from localstorage.
     * 
     *  @memberOf EcIdentityManager
     *  @method readIdentities
     *  @static
     */
    static readIdentities() {
        var localStore = localStorage["identities"];
        if (localStore == null) {
            return;
        }
        var c = JSON.parse(localStore);
        for (var i = 0; i < c.length; i++) {
            var identity = new EcIdentity();
            var o = c[i];
            var props = (o);
            identity.displayName = props["displayName"];
            identity.ppk = EcPpk.fromPem(props["ppk"]);
            identity.source = props["source"];
            var cont = false;
            for (var j = 0; j < EcIdentityManager.ids.length; j++) {
                if (EcIdentityManager.ids[j].ppk.toPem() == identity.ppk.toPem()) {
                    cont = true;
                }
            }
            if (cont) {
                continue;
            }
            EcIdentityManager.ids.push(identity);
        }
    };
    /**
     *  Writes contact data to localstorage.
     * 
     *  @memberOf EcIdentityManager
     *  @method saveIdentities
     *  @static
     */
    static saveIdentities() {
        var c = new Array();
        for (var i = 0; i < EcIdentityManager.ids.length; i++) {
            var o = new Object();
            var props = (o);
            var identity = EcIdentityManager.ids[i];
            props["displayName"] = identity.displayName;
            props["ppk"] = identity.ppk.toPem();
            props["source"] = identity.source;
            c.push(o);
        }
        localStorage["identities"] = JSON.stringify(c);
    };
    /**
     *  Clears contacts from the local storage
     * 
     *  @memberOf EcIdentityManager
     *  @method clearContacts
     *  @static
     */
    static clearContacts() {
        delete localStorage["contacts"];
        EcIdentityManager.contacts = new Array();
    };
    /**
     *  Clears identities from the local storage
     * 
     *  @memberOf EcIdentityManager
     *  @method clearIdentities
     *  @static
     */
    static clearIdentities() {
        delete localStorage["identities"];
        EcIdentityManager.ids = new Array();
    };
    /**
     *  Adds an identity to the identity manager. Checks for duplicates. Triggers
     *  events.
     * 
     *  @param {EcIdentity} identity Identity to add.
     *  @memberOf EcIdentityManager
     *  @method addIdentity
     *  @static
     */
    static addIdentity(identity) {
        for (var i = 0; i < EcIdentityManager.ids.length; i++) {
            if (EcIdentityManager.ids[i].equals(identity)) {
                return;
            }
        }
        EcIdentityManager.ids.push(identity);
        EcIdentityManager.identityChanged(identity);
    };
    /**
     *  Adds an identity to the identity manager. Checks for duplicates. Does not trigger
     *  events.
     * 
     *  @param {EcIdentity} identity Identity to add.
     *  @memberOf EcIdentityManager
     *  @method addIdentityQuietly
     *  @static
     */
    static addIdentityQuietly(identity) {
        for (var i = 0; i < EcIdentityManager.ids.length; i++) {
            if (EcIdentityManager.ids[i].equals(identity)) {
                return;
            }
        }
        EcIdentityManager.ids.push(identity);
    };
    /**
     *  Adds a contact to the identity manager. Checks for duplicates. Triggers
     *  events.
     * 
     *  @param {EcContact} contact Contact to add.
     *  @memberOf EcIdentityManager
     *  @method addContact
     *  @static
     */
    static addContact(contact) {
        for (var i = 0; i < EcIdentityManager.ids.length; i++) {
            if (EcIdentityManager.ids[i].ppk.toPk().toPem().equals(contact.pk.toPem())) {
                EcIdentityManager.ids[i].displayName = contact.displayName;
                EcIdentityManager.identityChanged(EcIdentityManager.ids[i]);
            }
        }
        for (var i = 0; i < EcIdentityManager.contacts.length; i++) {
            if (EcIdentityManager.contacts[i].pk.toPem().equals(contact.pk.toPem())) {
                EcIdentityManager.contacts[i].displayName = contact.displayName;
                EcIdentityManager.contactChanged(EcIdentityManager.contacts[i]);
            }
        }
        for (var i = 0; i < EcIdentityManager.contacts.length; i++) {
            if (EcIdentityManager.contacts[i].equals(contact)) {
                return;
            }
        }
        EcIdentityManager.contacts.push(contact);
        EcIdentityManager.contactChanged(contact);
    };
    /**
     *  Adds a contact to the identity manager. Checks for duplicates. Does not trigger
     *  events.
     * 
     *  @param {EcContact} contact Contact to add.
     *  @memberOf EcIdentityManager
     *  @method addContactQuietly
     *  @static
     */
    static addContactQuietly(contact) {
        for (var i = 0; i < EcIdentityManager.ids.length; i++) {
            if (EcIdentityManager.ids[i].ppk.toPk().toPem().equals(contact.pk.toPem())) {
                EcIdentityManager.ids[i].displayName = contact.displayName;
            }
        }
        for (var i = 0; i < EcIdentityManager.contacts.length; i++) {
            if (EcIdentityManager.contacts[i].pk.toPem().equals(contact.pk.toPem())) {
                EcIdentityManager.contacts[i].displayName = contact.displayName;
            }
        }
        for (var i = 0; i < EcIdentityManager.contacts.length; i++) {
            if (EcIdentityManager.contacts[i].equals(contact)) {
                return;
            }
        }
        EcIdentityManager.contacts.push(contact);
    };
    /**
     *  Create a signature sheet, authorizing movement of data outside of our
     *  control.
     * 
     *  @param {String[]} identityPksinPem Which identities to create signatures
     *                    for.
     *  @param {long}     duration Length of time in milliseconds to authorize
     *                    control.
     *  @param {String}   server Server that we are authorizing.
     *  @return {String} JSON Array containing signatures.
     *  @memberOf EcIdentityManager
     *  @method signatureSheetFor
     *  @static
     */
    static signatureSheetFor(identityPksinPem, duration, server) {
        var signatures = new Array();
        for (var j = 0; j < EcIdentityManager.ids.length; j++) {
            var ppk = EcIdentityManager.ids[j].ppk;
            var pk = ppk.toPk();
            if (identityPksinPem != null) {
                for (var i = 0; i < identityPksinPem.length; i++) {
                    var ownerPpk = EcPk.fromPem(identityPksinPem[i].trim());
                    if (pk.equals(ownerPpk)) {
                        signatures.push(EcIdentityManager.createSignature(duration, server, ppk).atIfy());
                    }
                }
            }
        }
        return JSON.stringify(signatures);
    };
    /**
     *  Asynchronous version of creating a signature sheet for a list of
     *  identities
     * 
     *  @param {String[]}          identityPksinPem Which identities to create signatures
     *                             for.
     *  @param {long}              duration Length of time in milliseconds to authorize
     *                             control.
     *  @param {String}            server Server that we are authorizing.
     *  @param {Callback1<String>} success Callback triggered once the signature
     *                             sheet has been created, returns the signature sheet
     *  @memberOf EcIdentityManager
     *  @method signatureSheetForAsync
     *  @static
     */
    static signatureSheetForAsync(identityPksinPem, duration, server, success, failure) {
        var signatures = new Array();
        new EcAsyncHelper().each(EcIdentityManager.ids, function(p1, incrementalSuccess) {
            var ppk = p1.ppk;
            var pk = ppk.toPk();
            var found = false;
            if (identityPksinPem != null) {
                for (var j = 0; j < identityPksinPem.length; j++) {
                    var ownerPpk = EcPk.fromPem(identityPksinPem[j].trim());
                    if (pk.equals(ownerPpk)) {
                        found = true;
                        EcIdentityManager.createSignatureAsync(duration, server, ppk, function(p1) {
                            signatures.push(p1.atIfy());
                            incrementalSuccess();
                        }, failure);
                    }
                }
            }
            if (!found) {
                incrementalSuccess();
            }
        }, function(pks) {
            success(JSON.stringify(signatures));
        });
    };
    /**
     *  Create a signature sheet for all identities, authorizing movement of data
     *  outside of our control.
     * 
     *  @param {long}   duration Length of time in milliseconds to authorize
     *                  control.
     *  @param {String} server Server that we are authorizing.
     *  @return {String} JSON Array containing signatures.
     *  @memberOf EcIdentityManager
     *  @method signatureSheet
     *  @static
     */
    static signatureSheet(duration, server, success, failure) {
        var cache = null;
        if (EcIdentityManager.signatureSheetCaching) {
            cache = (EcIdentityManager.signatureSheetCache)[server];
            if (cache != null) {
                if (cache[0] > new Date().getTime() + duration) {
                    return cassReturnAsPromise(cache[1],success,failure);
                }
            }
            duration += 20000;
        }
        var finalDuration = duration;
        let promises = EcIdentityManager.ids.map(ident => EcIdentityManager.createSignature(finalDuration,server,ident.ppk));
        let p = Promise.all(promises);
        p = p.then(signatures => {  
            var cache = null;
            var stringified = JSON.stringify(signatures);
            if (EcIdentityManager.signatureSheetCaching) {
                cache = new Array();
                cache[0] = new Date().getTime() + finalDuration;
                cache[1] = stringified;
                (EcIdentityManager.signatureSheetCache)[server] = cache;
            }
            return stringified;
        });
        return cassPromisify(p,success,failure);
    };
    /**
     *  Create a signature for a specific identity, authorizing movement of data
     *  outside of our control.
     * 
     *  @param {long}   duration Length of time in milliseconds to authorize
     *                  control.
     *  @param {String} server Server that we are authorizing.
     *  @param {EcPpk}  ppk Key of the identity to create a signature for
     *  @return {Ebac Signature} Signature created
     *  @memberOf EcIdentityManager
     *  @method createSignature
     *  @static
     */
    static createSignature(duration, server, ppk) {
        var s = new EbacSignature();
        s.expiry = new Date().getTime() + duration;
        s.server = server;
        (s)["@owner"] = ppk.toPk().toPem();
        return EcRsaOaepAsync.sign(ppk, s.toJson()).then(signature => {
            (s)["@signature"] = signature;
            return s;
        });        
    };
    /**
     *  Get PPK from PK (if we have it)
     * 
     *  @param {EcPk} fromPem PK to use to look up PPK
     *  @return {EcPpk} PPK or null.
     *  @memberOf EcIdentityManager
     *  @method getPpk
     *  @static
     */
    static getPpk(fromPem) {
        var pem = fromPem.toPem();
        for (var i = 0; i < EcIdentityManager.ids.length; i++) {
            if (pem.equals(EcIdentityManager.ids[i].ppk.toPk().toPem())) {
                return EcIdentityManager.ids[i].ppk;
            }
        }
        return null;
    };
    /**
     *  Get Contact from PK (if we have it)
     * 
     *  @param {EcPk} pk PK to use to look up PPK
     *  @return {EcPpk} PPK or null.
     *  @memberOf EcIdentityManager
     *  @method getContact
     *  @static
     */
    static getContact(pk) {
        for (var i = 0; i < EcIdentityManager.contacts.length; i++) {
            if (pk.equals(EcIdentityManager.contacts[i].pk)) {
                return EcIdentityManager.contacts[i];
            }
        }
        return null;
    };
    /**
     *  Get Identity from PK (if we have it)
     * 
     *  @param {EcPk} pk PK to use to look up PPK
     *  @return {EcIdentity} identity or null.
     *  @memberOf EcIdentityManager
     *  @method getIdentity
     *  @static
     */
    static getIdentity(pk) {
        for (var i = 0; i < EcIdentityManager.ids.length; i++) {
            if (pk.equals(EcIdentityManager.ids[i].ppk.toPk())) {
                return EcIdentityManager.ids[i];
            }
        }
        return null;
    };
    /**
     *  Sign a piece of data with all available keys that own that data.
     * 
     *  @param {EcRemoteLinkedData} d Data to sign.
     *  @memberOf EcIdentityManager
     *  @method sign
     *  @static
     */
    static sign(d) {
        let promises = [];
        if (d.owner != null) {
            for (var i = 0; i < d.owner.length; i++) {
                var attempt = EcIdentityManager.getPpk(EcPk.fromPem(d.owner[i]));
                if (attempt != null) {
                    promises.push(d.signWith(attempt));
                }
            }
        }
        return Promise.all(promises).then((signatures)=>{
            d.signature = signatures;
            if (d.signature != null && d.signature.length == 0) {
                delete (d)["signature"];
            }
        });
    };
    static myIdentitiesSearchString() {
        var searchString = "";
        for (var i = 0; i < EcIdentityManager.ids.length; i++) {
            if (i > 0) {
                searchString += " OR ";
            }
            searchString += "\\*reader:\"" + EcIdentityManager.ids[i].ppk.toPk().toPem() + "\"";
            searchString += " OR ";
            searchString += "\\*owner:\"" + EcIdentityManager.ids[i].ppk.toPk().toPem() + "\"";
        }
        return searchString;
    };
    static getMyPks() {
        var pks = new Array();
        if (EcIdentityManager.ids == null) 
            return pks;
        for (var i = 0; i < EcIdentityManager.ids.length; i++) 
            pks.push(EcIdentityManager.ids[i].ppk.toPk());
        return pks;
    };
};

