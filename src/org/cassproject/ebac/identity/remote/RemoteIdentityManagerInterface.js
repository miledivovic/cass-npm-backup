module.exports = class RemoteIdentityManagerInterface {
	configure(
		usernameSalt,
		usernameIterations,
		usernameWidth,
		passwordSalt,
		passwordIterations,
		passwordWidth,
		secretSalt,
		secretIterations
	) {}
	configureFromServer(success, failure) {/*Do nothing.*/}
	isGlobal() {/*Do nothing.*/ }
	clear() {/*Do nothing.*/ }
	setDefaultIdentityManagementServer(server) {/*Do nothing.*/ }
	startLogin(username, password) {/*Do nothing.*/ }
	changePassword(username, oldPassword, newPassword) {/*Do nothing.*/ }
	fetch(success, failure) {/*Do nothing.*/ }
	commit(success, failure) {/*Do nothing.*/ }
	create(success, failure) {/*Do nothing.*/ }
};
