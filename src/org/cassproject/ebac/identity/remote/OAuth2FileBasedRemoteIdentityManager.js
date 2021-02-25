/**
 *  Created by fray on 5/9/17.
 */
var OAuth2FileBasedRemoteIdentityManager = /**
 *  Reads the remote OAuth2 endpoint file.
 * 
 *  @param {Callback0} Method to call when initialization is complete.
 *  @memberOf OAuth2FileBasedRemoteIdentityManager
 *  @constructor
 */
function(initialized) {
    var me = this;
    EcRemote.getExpectingObject("", "hello.json", function(o) {
        try {
            me.configuration = JSON.parse(JSON.stringify(o));
            hello.init(o);
            me.constructor.oauthEnabled = true;
            initialized();
        }catch (ex) {
            me.constructor.oauthEnabled = false;
        }
    }, function(s) {
        me.constructor.oauthEnabled = false;
    });
};
OAuth2FileBasedRemoteIdentityManager = stjs.extend(OAuth2FileBasedRemoteIdentityManager, null, [RemoteIdentityManagerInterface], function(constructor, prototype) {
    constructor.oauthEnabled = false;
    prototype.server = null;
    prototype.configuration = null;
    prototype.oauthLoginResponse = null;
    prototype.network = null;
    prototype.global = null;
    /**
     *  Returns true if the identity manager is global. Returns false if the identity manager is local to the server.
     * 
     *  @return {Boolean} true if the identity manager is global.
     *  @memberOf OAuth2FileBasedRemoteIdentityManager
     *  @method isGlobal
     */
    prototype.isGlobal = function() {
        if (this.global == null) 
            return true;
        return this.global;
    };
    prototype.configure = function(usernameSalt, usernameIterations, usernameWidth, passwordSalt, passwordIterations, passwordWidth, secretSalt, secretIterations) {};
    prototype.configureFromServer = function(success, failure) {
        success(null);
    };
    /**
     *  Wipes login data and logs you out.
     * 
     *  @memberOf OAuth2FileBasedRemoteIdentityManager
     *  @method clear
     */
    prototype.clear = function() {
        OAuth2FileBasedRemoteIdentityManager.oauthEnabled = false;
        if (this.server != null) 
            hello.logout(this.server, null);
    };
    /**
     *  Configure compatible remote identity management server.
     * 
     *  @param {String} server
     *                  Name of the remote identity management server.
     *  @memberOf OAuth2FileBasedRemoteIdentityManager
     *  @method setDefaultIdentityManagementServer
     */
    prototype.setDefaultIdentityManagementServer = function(server) {
        this.server = server;
    };
    prototype.startLogin = function(username, password) {};
    prototype.changePassword = function(username, oldPassword, newPassword) {
        return false;
    };
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
    prototype.fetch = function(success, failure) {
        var o = new Object();
        (o)["scope"] = (this.configuration)[this.server + "Scope"];
        (o)["display"] = "page";
        var me = this;
        hello.on("auth.login", function(o) {
            me.oauthLoginResponse = o;
            me.network = (me.oauthLoginResponse)["network"];
            hello.api(me.network + "/me/folders", "get", new Object()).then(function(folderResponse) {
                var folders = (folderResponse)["data"];
                var foundIdentities = false;
                var foundContacts = false;
                for (var i = 0; i < folders.length; i++) {
                    var d = folders[i];
                    var name = (d)["name"];
                    var id = (d)["id"];
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
            }).fail(failure);
        });
        hello.login(this.server, o).fail(failure);
    };
    prototype.createContactFolder = function() {
        var me = this;
        var o = new Object();
        (o)["name"] = "CASS Contacts";
        hello.api(me.network + "/me/folders", "post", o).then(function(r) {
            me.hookIdentityManagerContacts((r)["id"]);
        });
    };
    prototype.createIdentityFolder = function(success) {
        var me = this;
        var o = new Object();
        (o)["name"] = "CASS Identities";
        hello.api(me.network + "/me/folders", "post", o).then(function(r) {
            me.hookIdentityManagerIdentities((r)["id"]);
            success(r);
        });
    };
    prototype.writeIdentityFiles = function(folderId, success) {
        var me = this;
        var helper = new EcAsyncHelper();
        helper.each(EcIdentityManager.ids, function(identity, callback0) {
            me.writeIdentityFile(folderId, identity, callback0);
        }, function(strings) {
            success(strings);
        });
    };
    prototype.writeIdentityFile = function(folderId, identity, finished) {
        var file = stringToFile(identity.ppk.toPem(), identity.displayName + ".pem", "text/plain");
        var o = new Object();
        (o)["id"] = (identity)["id"];
        if ((o)["id"] == undefined) 
            (o)["parent"] = folderId;
        (o)["name"] = file.name;
        var files = new Array();
        files.push(file);
        (o)["file"] = files;
        hello.api(this.network + "/me/files", (identity)["id"] == undefined ? "post" : "put", o).then(function(r) {
            (identity)["id"] = (r)["id"];
            if (finished != null) 
                finished();
        });
    };
    prototype.writeContactFiles = function(folderId) {
        for (var i = 0; i < EcIdentityManager.contacts.length; i++) {
            this.writeContactFile(folderId, EcIdentityManager.contacts[i]);
        }
    };
    prototype.writeContactFile = function(folderId, contact) {
        var file = stringToFile(contact.pk.toPem(), contact.displayName + ".pem", "text/plain");
        var o = new Object();
        (o)["id"] = (contact)["id"];
        if ((o)["id"] == undefined) 
            (o)["parent"] = folderId;
        (o)["name"] = file.name;
        var files = new Array();
        files.push(file);
        (o)["file"] = files;
        hello.api(this.network + "/me/files", (contact)["id"] == undefined ? "post" : "put", o).then(function(r) {
            (contact)["id"] = (r)["id"];
        });
    };
    prototype.readIdentityFiles = function(folderId, success, failure) {
        var me = this;
        var o = new Object();
        (o)["parent"] = folderId;
        hello.api(this.network + "/me/files", "get", o).then(function(folderResponse) {
            var files = (folderResponse)["data"];
            var h = new EcAsyncHelper();
            h.each(files, function(d, callback0) {
                var name = ((d)["name"]).replace("\\.pem", "");
                var id = (d)["id"];
                var directLink = (d)["downloadUrl"];
                EcRemote.getExpectingString("", directLink + "&access_token=" + (hello.getAuthResponse(me.network))["access_token"], function(s) {
                    var identity = new EcIdentity();
                    identity.displayName = name.replace(".pem", "");
                    identity.ppk = EcPpk.fromPem(s);
                    identity.source = "google";
                    (identity)["id"] = id;
                    EcIdentityManager.addIdentityQuietly(identity);
                    callback0();
                }, failure);
            }, function(strings) {
                success(null);
            });
        });
    };
    prototype.readContactFiles = function(folderId, success, failure) {
        var me = this;
        var o = new Object();
        (o)["parent"] = folderId;
        hello.api(this.network + "/me/files", "get", o).then(function(folderResponse) {
            var files = (folderResponse)["data"];
            var h = new EcAsyncHelper();
            h.each(files, function(d, callback0) {
                var name = ((d)["name"]).replace("\\.pem", "");
                var id = (d)["id"];
                var directLink = (d)["downloadUrl"];
                EcRemote.getExpectingString("", directLink + "&access_token=" + (hello.getAuthResponse(me.network))["access_token"], function(s) {
                    var contact = new EcContact();
                    contact.displayName = name.replace(".pem", "");
                    contact.pk = EcPk.fromPem(s);
                    contact.source = "google";
                    (contact)["id"] = id;
                    EcIdentityManager.addContactQuietly(contact);
                    callback0();
                }, failure);
            }, function(strings) {
                success(null);
            });
        });
    };
    prototype.hookIdentityManagerIdentities = function(folderId) {
        var me = this;
        EcIdentityManager.onIdentityChanged = function(identity) {
            me.writeIdentityFile(folderId, identity, null);
        };
    };
    prototype.hookIdentityManagerContacts = function(folderId) {
        var me = this;
        EcIdentityManager.onContactChanged = function(contact) {
            me.writeContactFile(folderId, contact);
        };
    };
    /**
     *  Commits credentials in EcIdentityManager to remote server.
     * 
     *  @param {Callback1<String>}   success
     *  @param {Callback1<String>}   failure
     *  @memberOf OAuth2FileBasedRemoteIdentityManager
     *  @method commit
     */
    prototype.commit = function(success, failure) {
        var me = this;
        var apio = new Object();
        (apio)["network"] = this.network;
        if (hello.getAuthResponse(this.server)) 
            hello.api(me.network + "/me/folders", "get", apio).then(function(folderResponse) {
                var folders = (folderResponse)["data"];
                for (var i = 0; i < folders.length; i++) {
                    var d = folders[i];
                    var name = (d)["name"];
                    var id = (d)["id"];
                    if (name == "CASS Identities") {
                        me.writeIdentityFiles(id, success);
                    }
                    if (name == "CASS Contacts") {
                        me.writeContactFiles(id);
                    }
                }
            }).fail(failure);
         else 
            failure("Please login again.");
    };
    prototype.create = function(success, failure) {
        var o = new Object();
        (o)["scope"] = (this.configuration)[this.server + "Scope"];
        var me = this;
        hello.on("auth.login", function(o) {
            me.oauthLoginResponse = o;
            me.network = (me.oauthLoginResponse)["network"];
            hello.api(me.network + "/me/folders", "get", new Object()).then(function(folderResponse) {
                var folders = (folderResponse)["data"];
                var foundIdentities = false;
                var foundContacts = false;
                for (var i = 0; i < folders.length; i++) {
                    var d = folders[i];
                    var name = (d)["name"];
                    var id = (d)["id"];
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
            }).fail(failure);
        });
        hello.login(this.server, o).fail(failure);
    };
}, {configuration: "Object", oauthLoginResponse: "Object"}, {});
