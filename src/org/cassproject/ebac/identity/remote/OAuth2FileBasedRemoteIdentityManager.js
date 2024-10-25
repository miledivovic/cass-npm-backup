const EcPk = require("../../../../../com/eduworks/ec/crypto/EcPk");
const EcIdentityManager = require("../EcIdentityManager");
/**
 *  Created by fray on 5/9/17.
 */
module.exports = class OAuth2FileBasedRemoteIdentityManager extends
	RemoteIdentityManagerInterface {
	/**
	 *  Reads the remote OAuth2 endpoint file.
	 *
	 *  @param {Callback0} Method to call when initialization is complete.
	 *  @memberOf OAuth2FileBasedRemoteIdentityManager
	 *  @constructor
	 */
	constructor() {
		super();
		let me = this;
		EcRemote.getExpectingObject(
			"",
			"hello.json",
			function(o) {
				try {
					me.configuration = JSON.parse(JSON.stringify(o));
					hello.init(o);
					me.oauthEnabled = true;
					initialized();
				} catch (ex) {
					me.oauthEnabled = false;
				}
			},
			function(s) {
				me.oauthEnabled = false;
			}
		);
	}
	static oauthEnabled = false;
	server = null;
	configuration = null;
	oauthLoginResponse = null;
	network = null;
	// global = null;
	/**
	 *  Returns true if the identity manager is global. Returns false if the identity manager is local to the server.
	 *
	 *  @return {Boolean} true if the identity manager is global.
	 *  @memberOf OAuth2FileBasedRemoteIdentityManager
	 *  @method isGlobal
	 */
	isGlobal() {
		if (this.global == null) return true;
		return this.global;
	}
	configureFromServer(success, failure) {
		success(null);
	}
	/**
	 *  Wipes login data and logs you out.
	 *
	 *  @memberOf OAuth2FileBasedRemoteIdentityManager
	 *  @method clear
	 */
	clear() {
		OAuth2FileBasedRemoteIdentityManager.oauthEnabled = false;
		if (this.server != null) hello.logout(this.server, null);
	}
	/**
	 *  Configure compatible remote identity management server.
	 *
	 *  @param {String} server
	 *                  Name of the remote identity management server.
	 *  @memberOf OAuth2FileBasedRemoteIdentityManager
	 *  @method setDefaultIdentityManagementServer
	 */
	setDefaultIdentityManagementServer(server) {
		this.server = server;
	}
	changePassword(username, oldPassword, newPassword) {
		return false;
	}
	/**
	 *  Fetch credentials from server, invoking events based on login success or
	 *  failure.
	 *  <p>
	 *  Automatically populates EcIdentityManager.
	 *  <p>
	 *  Does not require startLogin().
	 *
	 *  @param {Callback1<Object>} success
	 *  @param {Callback1<String>} failure
	 *  @memberOf OAuth2FileBasedRemoteIdentityManager
	 *  @method fetch
	 */
	fetch(success, failure) {
		let o = {};
		o["scope"] = this.configuration[this.server + "Scope"];
		o["display"] = "page";
		let me = this;
		hello.on("auth.login", function(o) {
			me.oauthLoginResponse = o;
			me.network = me.oauthLoginResponse["network"];
			hello
				.api(me.network + "/me/folders", "get", {})
				.then(function(folderResponse) {
					let folders = folderResponse["data"];
					let foundIdentities = false;
					let foundContacts = false;
					for (let i = 0; i < folders.length; i++) {
						let d = folders[i];
						let name = d["name"];
						let id = d["id"];
						if (name == "CASS Identities") {
							foundIdentities = true;
							me.hookIdentityManagerIdentities(id);
							me.readIdentityFiles(id, success, failure);
						}
						if (name == "CASS Contacts") {
							foundContacts = true;
							me.hookIdentityManagerContacts(id);
							me.readContactFiles(id, success, failure);
						}
					}
					if (!foundIdentities) {
						me.createIdentityFolder(success);
					}
					if (!foundContacts) {
						me.createContactFolder();
					}
				})
				.fail(failure);
		});
		hello.login(this.server, o).fail(failure);
	}
	createContactFolder() {
		let me = this;
		let o = {};
		o["name"] = "CASS Contacts";
		hello.api(me.network + "/me/folders", "post", o).then(function(r) {
			me.hookIdentityManagerContacts(r["id"]);
		});
	}
	createIdentityFolder(success) {
		let me = this;
		let o = {};
		o["name"] = "CASS Identities";
		hello.api(me.network + "/me/folders", "post", o).then(function(r) {
			me.hookIdentityManagerIdentities(r["id"]);
			success(r);
		});
	}
	writeIdentityFiles(folderId, success, eim) {
		if (eim === undefined || eim == null)
			eim = EcIdentityManager.default;
		let me = this;
		let helper = new EcAsyncHelper();
		helper.each(
			eim.ids,
			function(identity, callback0) {
				me.writeIdentityFile(folderId, identity, callback0);
			},
			function(strings) {
				success(strings);
			}
		);
	}
	writeIdentityFile(folderId, identity, finished) {
		let file = stringToFile(
			identity.ppk.toPem(),
			identity.displayName + ".pem",
			"text/plain"
		);
		let o = {};
		o["id"] = identity["id"];
		if (o["id"] == undefined) o["parent"] = folderId;
		o["name"] = file.name;
		let files = [];
		files.push(file);
		o["file"] = files;
		hello
			.api(
				this.network + "/me/files",
				identity["id"] == undefined ? "post" : "put",
				o
			)
			.then(function(r) {
				identity["id"] = r["id"];
				if (finished != null) finished();
			});
	}
	writeContactFiles(folderId, eim) {
		if (eim === undefined || eim == null)
			eim = EcIdentityManager.default;
		for (let i = 0; i < eim.contacts.length; i++) {
			this.writeContactFile(folderId, eim.contacts[i]);
		}
	}
	writeContactFile(folderId, contact) {
		let file = stringToFile(
			contact.pk.toPem(),
			contact.displayName + ".pem",
			"text/plain"
		);
		let o = {};
		o["id"] = contact["id"];
		if (o["id"] == undefined) o["parent"] = folderId;
		o["name"] = file.name;
		let files = [];
		files.push(file);
		o["file"] = files;
		hello
			.api(
				this.network + "/me/files",
				contact["id"] == undefined ? "post" : "put",
				o
			)
			.then(function(r) {
				contact["id"] = r["id"];
			});
	}
	readIdentityFiles(folderId, success, failure, eim) {
		let me = this;
		let o = {};
		o["parent"] = folderId;
		if (eim === undefined || eim == null)
			eim = EcIdentityManager.default;
		hello
			.api(this.network + "/me/files", "get", o)
			.then(function(folderResponse) {
				let files = folderResponse["data"];
				let h = new EcAsyncHelper();
				h.each(
					files,
					function(d, callback0) {
						let name = d["name"].replace("\\.pem", "");
						let id = d["id"];
						let directLink = d["downloadUrl"];
						EcRemote.getExpectingString(
							"",
							directLink +
								"&access_token=" +
								hello.getAuthResponse(me.network)[
									"access_token"
								],
							function(s) {
								let identity = new EcIdentity();
								identity.displayName = name.replace(".pem", "");
								identity.ppk = EcPpk.fromPem(s);
								identity.source = "google";
								identity["id"] = id;
								eim.addIdentityQuietly(identity);
								callback0();
							},
							failure
						);
					},
					function(strings) {
						success(eim);
					}
				);
			});
	}
	readContactFiles(folderId, success, failure, eim) {
		let me = this;
		let o = {};
		o["parent"] = folderId;
		if (eim === undefined || eim == null)
			eim = EcIdentityManager.default;
		hello
			.api(this.network + "/me/files", "get", o)
			.then(function(folderResponse) {
				let files = folderResponse["data"];
				let h = new EcAsyncHelper();
				h.each(
					files,
					function(d, callback0) {
						let name = d["name"].replace("\\.pem", "");
						let id = d["id"];
						let directLink = d["downloadUrl"];
						EcRemote.getExpectingString(
							"",
							directLink +
								"&access_token=" +
								hello.getAuthResponse(me.network)[
									"access_token"
								],
							function(s) {
								let contact = new EcContact();
								contact.displayName = name.replace(".pem", "");
								contact.pk = EcPk.fromPem(s);
								contact.source = "google";
								contact["id"] = id;
								eim.addContactQuietly(contact);
								callback0();
							},
							failure
						);
					},
					function(strings) {
						success(null);
					}
				);
			});
	}
	hookIdentityManagerIdentities(folderId, eim) {
		if (eim === undefined || eim == null)
			eim = EcIdentityManager.default;
		let me = this;
		eim.onIdentityChanged = function(identity) {
			me.writeIdentityFile(folderId, identity, null);
		};
	}
	hookIdentityManagerContacts(folderId, eim) {
		if (eim === undefined || eim == null)
			eim = EcIdentityManager.default;
		let me = this;
		eim.onContactChanged = function(contact) {
			me.writeContactFile(folderId, contact);
		};
	}
	/**
	 *  Commits credentials in EcIdentityManager to remote server.
	 *
	 *  @param {Callback1<String>}   success
	 *  @param {Callback1<String>}   failure
	 *  @memberOf OAuth2FileBasedRemoteIdentityManager
	 *  @method commit
	 */
	commit(success, failure) {
		let me = this;
		let apio = {};
		apio["network"] = this.network;
		if (hello.getAuthResponse(this.server))
			hello
				.api(me.network + "/me/folders", "get", apio)
				.then(function(folderResponse) {
					let folders = folderResponse["data"];
					for (let i = 0; i < folders.length; i++) {
						let d = folders[i];
						let name = d["name"];
						let id = d["id"];
						if (name == "CASS Identities") {
							me.writeIdentityFiles(id, success);
						}
						if (name == "CASS Contacts") {
							me.writeContactFiles(id);
						}
					}
				})
				.fail(failure);
		else failure("Please login again.");
	}
	create(success, failure) {
		let o = {};
		o["scope"] = this.configuration[this.server + "Scope"];
		let me = this;
		hello.on("auth.login", function(o) {
			me.oauthLoginResponse = o;
			me.network = me.oauthLoginResponse["network"];
			hello
				.api(me.network + "/me/folders", "get", {})
				.then(function(folderResponse) {
					let folders = folderResponse["data"];
					let foundIdentities = false;
					let foundContacts = false;
					for (let i = 0; i < folders.length; i++) {
						let d = folders[i];
						let name = d["name"];
						let id = d["id"];
						if (name == "CASS Identities") {
							foundIdentities = true;
							me.hookIdentityManagerIdentities(id);
							me.readIdentityFiles(id, success, failure);
						}
						if (name == "CASS Contacts") {
							foundContacts = true;
							me.hookIdentityManagerContacts(id);
							me.readContactFiles(id, success, failure);
						}
					}
					if (!foundIdentities) {
						me.createIdentityFolder(success);
					}
					if (!foundContacts) {
						me.createContactFolder();
					}
				})
				.fail(failure);
		});
		hello.login(this.server, o).fail(failure);
	}
};
