const EcPk = require("../../../../com/eduworks/ec/crypto/EcPk");
const EcPpkFacade = require("../../../../com/eduworks/ec/crypto/EcPpkFacade");
const EcRsaOaepAsync = require("../../../../com/eduworks/ec/crypto/EcRsaOaepAsync");
const {cassReturnAsPromise, cassPromisify} = require("../../../../com/eduworks/ec/promises/helpers");
const EbacSignature = require("../../../../com/eduworks/schema/ebac/EbacSignature");

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
module.exports = class EcIdentityManager {
	static default = new this();
	constructor() {
	}
	/**
	 *  The current user's owned identities (keys+displayName)
	 *
	 *  @property ids
	 *  @type EcIdentity[]
	 *  @static
	 */
	ids = [];
	/**
	 *  Contacts (Keys that we do not own)
	 *
	 *  @property contacts
	 *  @type EcContact[]
	 *  @static
	 */
	contacts = [];
	/**
	 *  Identity change hook.
	 *
	 *  @property onIdentityChanged
	 *  @type Callback1<EcIdentity>
	 *  @static
	 */
	onIdentityChanged = null;
	/**
	 *  Contacts change hook.
	 *
	 *  @property onContactChanged
	 *  @type Callback1<EcIdentity>
	 *  @static
	 */
	onContactChanged = null;
	signatureSheetCaching = false;
	signatureSheetCache = {};
	/**
	 *  Trigger for the onIdentityChanged hook
	 *
	 *  @param {EcIdentity} identity Identity that has changed
	 *  @memberOf EcIdentityManager
	 *  @method identityChanged
	 *  @static
	 */
	identityChanged(identity) {
		if (this.onIdentityChanged != null) {
			this.onIdentityChanged(identity);
		}
	}
	/**
	 *  Trigger for the onContactChanged hook
	 *
	 *  @param {EcContact} contact Contact that has changed
	 *  @memberOf EcIdentityManager
	 *  @method contactChanged
	 *  @static
	 */
	contactChanged(contact) {
		if (this.onContactChanged != null) {
			this.onContactChanged(contact);
		}
		this.saveContacts();
	}
	/**
	 *  Reads contact data from localstorage.
	 *
	 *  @memberOf EcIdentityManager
	 *  @method readContacts
	 *  @static
	 */
	readContacts() {
		var localStore = localStorage["contacts"];
		if (localStore == null) {
			return;
		}
		var c = JSON.parse(localStore);
		for (var i = 0; i < c.length; i++) {
			var contact = new EcContact();
			var o = c[i];
			var props = o;
			contact.displayName = props["displayName"];
			contact.pk = EcPk.fromPem(props["pk"]);
			contact.source = props["source"];
			var cont = false;
			for (var j = 0; j < this.contacts.length; j++) {
				if (
					this.contacts[j].pk.toPem() ==
					contact.pk.toPem()
				) {
					cont = true;
				}
			}
			if (cont) {
				continue;
			}
			this.contacts.push(contact);
		}
	}
	/**
	 *  Writes contact data to localstorage.
	 *
	 *  @memberOf EcIdentityManager
	 *  @method saveContacts
	 *  @static
	 */
	saveContacts() {
		var c = [];
		for (var i = 0; i < this.contacts.length; i++) {
			var o = {};
			var props = o;
			var contact = this.contacts[i];
			props["displayName"] = contact.displayName;
			props["pk"] = contact.pk.toPem();
			props["source"] = contact.source;
			c.push(o);
		}
		localStorage["contacts"] = JSON.stringify(c);
	}
	/**
	 *  Reads contact data from localstorage.
	 *
	 *  @memberOf EcIdentityManager
	 *  @method readIdentities
	 *  @static
	 */
	readIdentities() {
		if (typeof localStorage === "undefined") return;
		var localStore = localStorage["identities"];
		if (localStore == null) {
			return;
		}
		var c = JSON.parse(localStore);
		for (var i = 0; i < c.length; i++) {
			var identity = new EcIdentity();
			var o = c[i];
			var props = o;
			identity.displayName = props["displayName"];
			identity.ppk = EcPpk.fromPem(props["ppk"]);
			identity.source = props["source"];
			var cont = false;
			for (var j = 0; j < this.ids.length; j++) {
				if (
					this.ids[j].ppk.toPem() == identity.ppk.toPem()
				) {
					cont = true;
				}
			}
			if (cont) {
				continue;
			}
			this.ids.push(identity);
		}
	}
	/**
	 *  Writes contact data to localstorage.
	 *
	 *  @memberOf EcIdentityManager
	 *  @method saveIdentities
	 *  @static
	 */
	saveIdentities() {
		var c = [];
		for (var i = 0; i < this.ids.length; i++) {
			var o = {};
			var props = o;
			var identity = this.ids[i];
			props["displayName"] = identity.displayName;
			props["ppk"] = identity.ppk.toPem();
			props["source"] = identity.source;
			c.push(o);
		}
		if (typeof localStorage !== "undefined")
			localStorage["identities"] = JSON.stringify(c);
	}
	/**
	 *  Clears contacts from the local storage
	 *
	 *  @memberOf EcIdentityManager
	 *  @method clearContacts
	 *  @static
	 */
	clearContacts() {
		if (typeof localStorage !== "undefined")
			delete localStorage["contacts"];
		this.contacts = [];
	}
	/**
	 *  Clears identities from the local storage
	 *
	 *  @memberOf EcIdentityManager
	 *  @method clearIdentities
	 *  @static
	 */
	clearIdentities() {
		if (typeof localStorage !== "undefined")
			delete localStorage["identities"];
		this.ids = [];
	}
	/**
	 *  Adds an identity to the identity manager. Checks for duplicates. Triggers
	 *  events.
	 *
	 *  @param {EcIdentity} identity Identity to add.
	 *  @memberOf EcIdentityManager
	 *  @method addIdentity
	 *  @static
	 */
	addIdentity(identity) {
		for (var i = 0; i < this.ids.length; i++) {
			if (this.ids[i].equals(identity)) {
				return;
			}
		}
		this.ids.push(identity);
		this.identityChanged(identity);
	}
	/**
	 *  Adds an identity to the identity manager. Checks for duplicates. Does not trigger
	 *  events.
	 *
	 *  @param {EcIdentity} identity Identity to add.
	 *  @memberOf EcIdentityManager
	 *  @method addIdentityQuietly
	 *  @static
	 */
	addIdentityQuietly(identity) {
		for (var i = 0; i < this.ids.length; i++) {
			if (this.ids[i].equals(identity)) {
				return;
			}
		}
		this.ids.push(identity);
	}
	/**
	 *  Adds a contact to the identity manager. Checks for duplicates. Triggers
	 *  events.
	 *
	 *  @param {EcContact} contact Contact to add.
	 *  @memberOf EcIdentityManager
	 *  @method addContact
	 *  @static
	 */
	addContact(contact) {
		for (var i = 0; i < this.ids.length; i++) {
			if (
				this.ids[i].ppk
					.toPk()
					.toPem()
					.equals(contact.pk.toPem())
			) {
				this.ids[i].displayName = contact.displayName;
				this.identityChanged(this.ids[i]);
			}
		}
		for (var i = 0; i < this.contacts.length; i++) {
			if (
				this.contacts[i].pk
					.toPem()
					.equals(contact.pk.toPem())
			) {
				this.contacts[i].displayName = contact.displayName;
				this.contactChanged(this.contacts[i]);
			}
		}
		for (var i = 0; i < this.contacts.length; i++) {
			if (this.contacts[i].equals(contact)) {
				return;
			}
		}
		this.contacts.push(contact);
		this.contactChanged(contact);
	}
	/**
	 *  Adds a contact to the identity manager. Checks for duplicates. Does not trigger
	 *  events.
	 *
	 *  @param {EcContact} contact Contact to add.
	 *  @memberOf EcIdentityManager
	 *  @method addContactQuietly
	 *  @static
	 */
	addContactQuietly(contact) {
		for (var i = 0; i < this.ids.length; i++) {
			if (
				this.ids[i].ppk
					.toPk()
					.toPem()
					.equals(contact.pk.toPem())
			) {
				this.ids[i].displayName = contact.displayName;
			}
		}
		for (var i = 0; i < this.contacts.length; i++) {
			if (
				this.contacts[i].pk
					.toPem()
					.equals(contact.pk.toPem())
			) {
				this.contacts[i].displayName = contact.displayName;
			}
		}
		for (var i = 0; i < this.contacts.length; i++) {
			if (this.contacts[i].equals(contact)) {
				return;
			}
		}
		this.contacts.push(contact);
	}
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
	 *  @method signatureSheetFor
	 *  @static
	 */
	signatureSheetFor(
		identityPksinPem,
		duration,
		server,
		success,
		failure
	) {
		var cache = null;
		if (this.signatureSheetCaching) {
			cache = this.signatureSheetCache[server];
			if (cache != null) {
				if (cache[0] > new Date().getTime() + duration) {
					return cassReturnAsPromise(cache[1], success, failure);
				}
			}
			duration += 20000;
		}
		var finalDuration = duration;
		let promises = identityPksinPem
			.map((pk) => this.getPpk(EcPk.fromPem(pk)))
			.filter((x) => x != null)
			.map((ppk) =>
				this.createSignature(finalDuration, server, ppk)
			);
		let p = Promise.all(promises);
		p = p.then((signatureCandidates) => {
			let signatures = signatureCandidates.filter(x=>x);
			var cache = null;
			var stringified = JSON.stringify(signatures);
			if (this.signatureSheetCaching) {
				cache = [];
				cache[0] = new Date().getTime() + finalDuration;
				cache[1] = stringified;
				this.signatureSheetCache[server] = cache;
			}
			return stringified;
		});
		return cassPromisify(p, success, failure);
	}
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
	signatureSheet(duration, server, success, failure) {
		var cache = null;
		if (this.signatureSheetCaching) {
			cache = this.signatureSheetCache[server];
			if (cache != null) {
				if (cache[0] > new Date().getTime() + duration) {
					return cassReturnAsPromise(cache[1], success, failure);
				}
			}
			duration += 20000;
		}
		var finalDuration = duration;
		let promises = this.ids.map((ident) =>
			this.createSignature(finalDuration, server, ident.ppk)
		);
		let p = Promise.all(promises);
		p = p.then((signatureCandidates) => {
			let signatures = signatureCandidates.filter(x=>x);
			var stringified = JSON.stringify(signatures);
			if (this.signatureSheetCaching) {
				var cache = null;
				cache = [];
				cache[0] = new Date().getTime() + finalDuration;
				cache[1] = stringified;
				this.signatureSheetCache[server] = cache;
			}
			return stringified;
		});
		return cassPromisify(p, success, failure);
	}
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
	createSignature(duration, server, ppk) {
		if (ppk instanceof EcPpkFacade) {
			return null;
		}
		var s = new EbacSignature();
		s.expiry = new Date().getTime() + duration;
		s.server = server;
		delete s.owner;
		delete s.signature;
		s["@owner"] = ppk.toPk().toPem();
		return EcRsaOaepAsync.sign(ppk, s.toJson()).then((signature) => {
			s["@signature"] = signature;
			return s;
		});
	}
	/**
	 *  Get PPK from PK (if we have it)
	 *
	 *  @param {EcPk} fromPem PK to use to look up PPK
	 *  @return {EcPpk} PPK or null.
	 *  @memberOf EcIdentityManager
	 *  @method getPpk
	 *  @static
	 */
	getPpk(fromPem) {
		var pem = fromPem.toPem();
		for (var i = 0; i < this.ids.length; i++) {
			if (pem == this.ids[i].ppk.toPk().toPem()) {
				return this.ids[i].ppk;
			}
		}
		return null;
	}
	/**
	 *  Get Contact from PK (if we have it)
	 *
	 *  @param {EcPk} pk PK to use to look up PPK
	 *  @return {EcPpk} PPK or null.
	 *  @memberOf EcIdentityManager
	 *  @method getContact
	 *  @static
	 */
	getContact(pk) {
		for (var i = 0; i < this.contacts.length; i++) {
			if (pk.equals(this.contacts[i].pk)) {
				return this.contacts[i];
			}
		}
		return null;
	}
	/**
	 *  Get Identity from PK (if we have it)
	 *
	 *  @param {EcPk} pk PK to use to look up PPK
	 *  @return {EcIdentity} identity or null.
	 *  @memberOf EcIdentityManager
	 *  @method getIdentity
	 *  @static
	 */
	getIdentity(pk) {
		for (var i = 0; i < this.ids.length; i++) {
			if (pk.equals(this.ids[i].ppk.toPk())) {
				return this.ids[i];
			}
		}
		return null;
	}
	/**
	 *  Sign a piece of data with all available keys that own that data.
	 *
	 *  @param {EcRemoteLinkedData} d Data to sign.
	 *  @memberOf EcIdentityManager
	 *  @method sign
	 *  @static
	 */
	async sign(d) {
		let promises = [];
		if (d.owner != null) {
			for (var i = 0; i < d.owner.length; i++) {
				var attempt = this.getPpk(
					EcPk.fromPem(d.owner[i])
				);
				if (attempt != null) {
					promises.push(d.signWith(attempt));
				}
			}
		}
		return Promise.all(promises).then((signatures) => {
			d.signature = signatures.filter(x=>x);
			if (d.signature != null && d.signature.length == 0) {
				delete d["signature"];
			}
			return d;
		});
	}
	myIdentitiesSearchString() {
		var searchString = "";
		for (var i = 0; i < this.ids.length; i++) {
			if (i > 0) {
				searchString += " OR ";
			}
			searchString +=
				'\\*reader:"' +
				this.ids[i].ppk.toPk().toPem() +
				'"';
			searchString += " OR ";
			searchString +=
				'\\*owner:"' +
				this.ids[i].ppk.toPk().toPem() +
				'"';
		}
		return searchString;
	}
	getMyPks() {
		var pks = [];
		if (this.ids == null) return pks;
		for (var i = 0; i < this.ids.length; i++)
			pks.push(this.ids[i].ppk.toPk());
		return pks;
	}
};
