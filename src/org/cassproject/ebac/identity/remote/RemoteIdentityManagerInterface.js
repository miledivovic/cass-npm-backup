module.exports = class RemoteIdentityManagerInterface{
    configure(usernameSalt, usernameIterations, usernameWidth, passwordSalt, passwordIterations, passwordWidth, secretSalt, secretIterations) {};
    configureFromServer(success, failure) {};
    isGlobal() {};
    clear() {};
    setDefaultIdentityManagementServer(server) {};
    startLogin(username, password) {};
    changePassword(username, oldPassword, newPassword) {};
    fetch(success, failure) {};
    commit(success, failure) {};
    create(success, failure) {};
};
