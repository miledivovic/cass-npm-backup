/**
 *  Logs into and stores/retrieves credentials from a compatible remote server.
 *  Performs anonymization of the user.
 *  <p>
 *  Requires initialization with server specific salts. Server specific salts
 *  prevent co-occurrence attacks, should credentials on one server be
 *  compromised (intercepted in transit).
 *  <p>
 *  Transmits hashed username, hashed password, and encrypts credentials using
 *  the hashed combination of the username and password. This prevents the system
 *  storing the credentials from having any knowledge of the user.
 *  <p>
 *  Password recovery is done by, when the password changes, creating a
 *  cryptographic pad (or perfect cipher) where one half is stored on the server,
 *  and the other half is stored with the user. Should the user lose this pad and
 *  forget their password, they are not able to recover or reset their password,
 *  and their data should be considered lost.
 * 
 *  @author fritz.ray@eduworks.com
 *  @module com.eduworks.ec
 *  @class EcRemoteIdentityManager
 */
module.exports = class EcRemoteIdentityManager extends RemoteIdentityManagerInterface{
    server = null;
    global = null;
    usernameWithSalt = null;
    passwordWithSalt = null;
    secretWithSalt = null;
    pad = null;
    token = null;
    usernameSalt = null;
    usernameIterations = 0;
    usernameWidth = 0;
    passwordSalt = null;
    passwordIterations = 0;
    passwordWidth = 0;
    secretSalt = null;
    secretIterations = 0;
    configured = false;
    /**
     *  Returns true if the identity manager is global. Returns false if the identity manager is local to the server.
     * 
     *  @return {Boolean} true if the identity manager is global.
     *  @memberOf EcRemoteIdentityManager
     */
    isGlobal() {
        if (this.global == null) 
            return false;
        return this.global;
    };
    /**
     *  Configure parameters of the remote login storage.
     * 
     *  @param {String} usernameSalt
     *                  Salt used in hashing the username.
     *  @param {int}    usernameIterations
     *                  Number of times to hash the username.
     *  @param {int}    usernameWidth
     *                  Resultant width of username in bytes.
     *  @param {String} passwordSalt
     *                  Salt used to hash password.
     *  @param {int}    passwordIterations
     *                  Number of times to hash password.
     *  @param {int}    passwordWidth
     *                  Resultant width of password in bytes.
     *  @param {String} secretSalt
     *                  Salt used to hash secret (composed of username + password)
     *  @param {int}    secretIterations
     *                  Number of times to hash secret.
     *  @memberOf EcRemoteIdentityManager
     *  @method configure
     */
    configure(usernameSalt, usernameIterations, usernameWidth, passwordSalt, passwordIterations, passwordWidth, secretSalt, secretIterations) {
        this.usernameSalt = usernameSalt;
        this.usernameIterations = usernameIterations;
        this.usernameWidth = usernameWidth;
        this.passwordSalt = passwordSalt;
        this.passwordIterations = passwordIterations;
        this.passwordWidth = passwordWidth;
        this.secretSalt = secretSalt;
        this.secretIterations = secretIterations;
        this.configured = true;
    };
    /**
     *  Configures parameters of the remote server by accessing configuration details via webservice
     * 
     *  @param {Callback1<Object>} success
     *                             Callback triggered after successfully configured
     *  @param {Callback1<String>} failure
     *                             Callback triggered if an error during failure
     *  @memberOf EcRemoteIdentityManager
     *  @method configureFromServer
     */
    configureFromServer(success, failure) {
        var me = this;
        EcRemote.getExpectingObject(this.server, "sky/id/salts", function(p1) {
            me.usernameSalt = (p1)["usernameSalt"];
            if (me.usernameSalt.length < 16) {
                failure("Insufficient length on Username Salt");
                return;
            }
            me.usernameIterations = stjs.trunc((p1)["usernameIterations"]);
            if (me.usernameIterations < 1000) {
                failure("Insufficient iterations on Username Hash");
                return;
            }
            me.usernameWidth = stjs.trunc((p1)["usernameLength"]);
            if (me.usernameWidth != 64) {
                failure("Username Hash required to be length 64.");
                return;
            }
            me.passwordSalt = (p1)["passwordSalt"];
            if (me.passwordSalt.length < 16) {
                failure("Insufficient length on Password Salt");
                return;
            }
            me.passwordIterations = stjs.trunc((p1)["passwordIterations"]);
            if (me.passwordIterations < 1000) {
                failure("Insufficient iterations on Password Hash");
                return;
            }
            me.passwordWidth = stjs.trunc((p1)["passwordLength"]);
            if (me.passwordWidth != 64) {
                failure("Password Hash required to be length 64.");
                return;
            }
            me.secretSalt = (p1)["secretSalt"];
            if (me.secretSalt.length < 16) {
                failure("Insufficient length on Secret Salt");
                return;
            }
            me.secretIterations = stjs.trunc((p1)["secretIterations"]);
            if (me.secretIterations < 1000) {
                failure("Insufficient iterations on Secret Hash");
                return;
            }
            me.configured = true;
            if (success != null) 
                success(p1);
        }, function(p1) {
            me.configured = false;
            if (failure != null) 
                failure(p1);
             else 
                console.error(p1);
        });
    };
    /**
     *  Wipes login data.
     * 
     *  @memberOf EcRemoteIdentityManager
     *  @method clear
     */
    clear() {
        this.usernameWithSalt = null;
        this.passwordWithSalt = null;
        this.secretWithSalt = null;
        this.pad = null;
        this.token = null;
    };
    /**
     *  Configure compatible remote identity management server.
     * 
     *  @param {String} server
     *                  URL to remote identity management server.
     *  @memberOf EcRemoteIdentityManager
     *  @method setDefaultIdentityManagementServer
     */
    setDefaultIdentityManagementServer(server) {
        this.server = server;
    };
    /**
     *  "Log Into" system, generating credentials. Does not actually remotely
     *  access any machine.
     *  <p>
     *  Please clear username and password fields after this function is called.
     * 
     *  @param {String} username
     *                  Username to login with
     *  @param {String} password
     *                  Password to authenticate username with
     *  @memberOf EcRemoteIdentityManager
     *  @method startLogin
     */
    startLogin(username, password) {
        if (!this.configured) {
             throw new RuntimeException("Remote Identity not configured.");
        }
        this.usernameWithSalt = forge.util.encode64(forge.pkcs5.pbkdf2(username, this.usernameSalt, this.usernameIterations, this.usernameWidth));
        this.passwordWithSalt = forge.util.encode64(forge.pkcs5.pbkdf2(password, this.passwordSalt, this.passwordIterations, this.passwordWidth));
        var arys = new Array();
        arys.push(username, password);
        var secret = this.splicePasswords(arys);
        this.secretWithSalt = forge.util.encode64(forge.pkcs5.pbkdf2(secret, this.secretSalt, this.secretIterations, 32));
    };
    /**
     *  Change password of user in memory. Does not automatically commit new credentials.
     *  <p>
     *  Please clear username and password fields after this function is called.
     * 
     *  @param {String} username
     *                  Username
     *  @param {String} oldPassword
     *                  Current password
     *  @param {String} newPassword
     *                  Desired password
     *  @return {boolean}
     *  Valid password change request.
     *  @memberOf EcRemoteIdentityManager
     *  @method changePassword
     */
    changePassword(username, oldPassword, newPassword) {
        var usernameHash = forge.util.encode64(forge.pkcs5.pbkdf2(username, this.usernameSalt, this.usernameIterations, this.usernameWidth));
        if (this.usernameWithSalt != usernameHash) {
             throw new RuntimeException("Username does not match. Aborting password change.");
        }
        var oldPasswordHash = forge.util.encode64(forge.pkcs5.pbkdf2(oldPassword, this.passwordSalt, this.passwordIterations, this.passwordWidth));
        if (this.passwordWithSalt != oldPasswordHash) {
             throw new RuntimeException("Old password does not match. Aborting password change.");
        }
        this.passwordWithSalt = forge.util.encode64(forge.pkcs5.pbkdf2(newPassword, this.passwordSalt, this.passwordIterations, this.passwordWidth));
        var arys = new Array();
        arys.push(username, newPassword);
        var secret = this.splicePasswords(arys);
        this.secretWithSalt = forge.util.encode64(forge.pkcs5.pbkdf2(secret, this.secretSalt, this.secretIterations, 32));
        return true;
    };
    /**
     *  Fetch credentials from server, invoking events based on login success or
     *  failure.
     *  <p>
     *  Automatically populates EcIdentityManager.
     *  <p>
     *  Requires login().
     * 
     *  @param {Callback1<Object>} success
     *  @param {Callback1<String>} failure
     *  @memberOf EcRemoteIdentityManager
     *  @method fetch
     */
    fetch(success, failure) {
        if (!this.configured) {
            failure("Remote Identity not configured.");
            return;
        }
        if (this.usernameWithSalt == null || this.passwordWithSalt == null || this.secretWithSalt == null) {
            failure("Please log in before performing this operation.");
            return;
        }
        var r = new EbacCredentialRequest();
        r.username = this.usernameWithSalt;
        r.password = this.passwordWithSalt;
        var fd = new FormData();
        fd.append("credentialRequest", r.toJson());
        var me = this;
        EcRemote.postExpectingObject(this.server, "sky/id/login", fd, function(arg0) {
            var cs = arg0;
            me.pad = cs.pad;
            me.token = cs.token;
            if (cs.credentials != null) 
                for (var i = 0; i < cs.credentials.length; i++) {
                    var c = cs.credentials[i];
                    var identity = EcIdentity.fromCredential(c, me.secretWithSalt, me.server);
                    EcIdentityManager.addIdentity(identity);
                }
            if (cs.contacts != null) 
                for (var i = 0; i < cs.contacts.length; i++) {
                    var c = cs.contacts[i];
                    var identity = EcContact.fromEncryptedContact(c, me.secretWithSalt, me.server);
                    EcIdentityManager.addContact(identity);
                }
            success(arg0);
        }, function(arg0) {
            failure(arg0);
        });
    };
    /**
     *  Commits credentials in EcIdentityManager to remote server.
     *  <p>
     *  Will trigger pad generation and fail if the pad has not been specified.
     * 
     *  @param {Callback1<String>}   success
     *  @param {Callback1<String>}   failure
     *  @memberOf EcRemoteIdentityManager
     *  @method commit
     */
    commit(success, failure) {
        var service = "sky/id/commit";
        this.sendCredentials(success, failure, service);
    };
    /**
     *  Creates an account.
     *  <p>
     *  Please note that the remote login server does not throw error messages if
     *  an account creation is blocked due to being a duplicate. This prevents
     *  login probing. This will always succeed (if the request is properly
     *  formed and makes it to the server).
     *  <p>
     *  Will trigger pad generation and fail if the pad has not been specified.
     * 
     *  @param {Callback1<String>}   success
     *                               Callback triggered after successfully creating an account
     *  @param {Callback1<String>}   failure
     *                               Callback triggered if error creating an account
     *  @memberOf EcRemoteIdentityManager
     *  @method create
     */
    create(success, failure) {
        var service = "sky/id/create";
        this.sendCredentials(success, failure, service);
    };
    /**
     *  Sends the identity managers credentials to the service specified
     * 
     *  @param {Callback1<String>}   success
     *                               Callback triggered if credentials sent successfully
     *  @param {Callback1<String>}   failure
     *                               Callback triggered if error sending credentials
     *  @param service               Service to send credentials to on server
     *  @memberOf EcRemoteIdentityManager
     *  @method sendCredentials
     */
    sendCredentials(success, failure, service) {
        if (!this.configured) 
             throw new RuntimeException("Remote Identity not configured.");
        if (this.usernameWithSalt == null || this.passwordWithSalt == null || this.secretWithSalt == null) {
             throw new RuntimeException("Please log in before performing this operation.");
        }
        var credentials = new Array();
        var contacts = new Array();
        for (var i = 0; i < EcIdentityManager.ids.length; i++) {
            var id = EcIdentityManager.ids[i];
            if (id.source != null && id.source != this.server) 
                continue;
            id.source = this.server;
            credentials.push(id.toCredential(this.secretWithSalt));
        }
        for (var i = 0; i < EcIdentityManager.contacts.length; i++) {
            var id = EcIdentityManager.contacts[i];
            if (id.source != null && id.source != this.server) 
                continue;
            id.source = this.server;
            contacts.push(id.toEncryptedContact(this.secretWithSalt));
        }
        var commit = new EbacCredentialCommit();
        commit.username = this.usernameWithSalt;
        commit.password = this.passwordWithSalt;
        commit.token = this.token;
        commit.credentials.pad = this.pad;
        commit.credentials.credentials = credentials;
        commit.credentials.contacts = contacts;
        var fd = new FormData();
        fd.append("credentialCommit", commit.toJson());
        var me = this;
        EcIdentityManager.signatureSheetAsync(60000, this.server, function(p1) {
            fd.append("signatureSheet", p1);
            EcRemote.postExpectingString(me.server, service, fd, function(arg0) {
                success(arg0);
            }, function(arg0) {
                failure(arg0);
            });
        }, failure);
    };
    /**
     *  Splices together passwords (in a fashion more like shuffling a deck of
     *  cards, not appending).
     * 
     *  @param {String[]} passwords
     *                    Passwords to splice.
     *  @return {String}
     *  Spliced password.
     *  @memberOf EcRemoteIdentityManager
     *  @method splicePasswords
     */
    splicePasswords(passwords) {
        var passwordSplice = "";
        for (var charIndex = 0; charIndex > 0; charIndex++) {
            var foundAny = false;
            for (var passwordIndex = 0; passwordIndex < passwords.length; passwordIndex++) {
                if (charIndex >= passwords[passwordIndex].length) 
                    continue;
                passwordSplice += passwords[passwordIndex].charAt(charIndex);
                foundAny = true;
            }
            if (!foundAny) 
                break;
        }
        return passwordSplice;
    };
};
