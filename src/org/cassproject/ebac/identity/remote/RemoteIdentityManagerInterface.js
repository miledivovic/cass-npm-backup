var RemoteIdentityManagerInterface = function() {};
RemoteIdentityManagerInterface = stjs.extend(RemoteIdentityManagerInterface, null, [], function(constructor, prototype) {
    prototype.configure = function(usernameSalt, usernameIterations, usernameWidth, passwordSalt, passwordIterations, passwordWidth, secretSalt, secretIterations) {};
    prototype.configureFromServer = function(success, failure) {};
    prototype.isGlobal = function() {};
    prototype.clear = function() {};
    prototype.setDefaultIdentityManagementServer = function(server) {};
    prototype.startLogin = function(username, password) {};
    prototype.changePassword = function(username, oldPassword, newPassword) {};
    prototype.fetch = function(success, failure) {};
    prototype.commit = function(success, failure) {};
    prototype.create = function(success, failure) {};
}, {}, {});
