const EcRepository = require("../../../../../org/cassproject/ebac/repository/EcRepository");

require("../../../../../org/cassproject/general/AuditLogger.js");

/**
 *  @author debbie.brown@eduworks.com
 */
module.exports = class ExtPerson extends schema.Person {
	/**
	 *  Constructor, automatically sets @context and @type.
	 *
	 *  @constructor
	 */
	constructor() {
		super();
		this.context = "http://schema.eduworks.com/pebleXtension/0.1/";
		this.type = "Person";
	}
	static positionLabelsMap = {};
	static positionUrlsMap = {};
	legacyId = null;
	agreementStatus = null;
	addressRegion = null;
	addressLocality = null;
	lastActiveAt = null;
	communities = null;
	dateCreated = null;
	/**
	 *  Retrieves the person specified with the ID from the server
	 *
	 *  @param {String}               id
	 *                                ID of the person to retrieve
	 *  @param {Callback1<ExtPerson>} success
	 *                                Callback triggered on successfully retrieving the person,
	 *                                returns the person
	 *  @param {Callback1<String>}    [failure]
	 *                                Callback triggered if error while retrieving person
	 *  @memberOf ExtPerson
	 *  @method get
	 *  @static
	 */
	static get(id, success, failure, repo, eim) {
		return EcRepository.getAs(id, new ExtPerson(), success, failure, repo, eim);
	}
	/**
	 *  Retrieves a person from the server synchronously, the call
	 *  blocks until it is successful or an error occurs
	 *
	 *  @param {String} id
	 *                  ID of the person to retrieve
	 *  @return ExtPerson
	 *  The person retrieved
	 *  @memberOf ExtPerson
	 *  @method getBlocking
	 *  @static
	 */
	static getBlocking(id, repo, eim) {
		return EcRepository.getAs(id, new ExtPerson(), null, null, repo, eim);
	}
	/**
	 *  Searches the repository using the query and optional parameters provided
	 *
	 *  @param {EcRepository}                repo
	 *                                       Repository to search using the query provided
	 *  @param {String}                      query
	 *                                       The query to send to the search
	 *  @param {Callback1<Array<ExtPerson>>} success
	 *                                       Callback triggered on successful search return
	 *  @param {Callback1<String>}           [failure]
	 *                                       Callback triggered if error searching
	 *  @param {Object}                      [paramObj]
	 *                                       Parameters to include in the search
	 *  @param start
	 *  @param size
	 *  @memberOf ExtPerson
	 *  @method search
	 *  @static
	 */
	static search(repo, query, success, failure, paramObj, eim) {
		return EcRepository.searchAs(
			repo,
			query,
			() => new ExtPerson(),
			success,
			failure,
			paramObj, eim
		);
	}
	/**
	 *  Saves this person on the server corresponding to its ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered on successfully saving the ExtPerson
	 *  @param {Callback1<String>} [failure]
	 *                             Callback triggered if error while saving ExtPerson
	 *  @return {ExtPerson}
	 *  @memberOf ExtPerson
	 *  @method save
	 */
	save(success, failure, repo, eim) {
		if (this.getId() == null || this.getId() == "") {
			let msg = "ID cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (this.getFirstName() == null || this.getFirstName() == "") {
			let msg = "First name cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (this.getLastName() == null || this.getLastName() == "") {
			let msg = "Last name cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (this.getUserName() == null || this.getUserName() == "") {
			let msg = "Username cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (this.getEmail() == null || this.getEmail() == "") {
			let msg = "Email cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		return EcRepository.save(this, success, failure, repo, eim);
	}
	/**
	 *  Deletes the person from the server corresponding to its ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered on successfully deleting the person
	 *  @param {Callback1<String>} [failure]
	 *                             Callback triggered if error while deleting person
	 *  @memberOf ExtPerson
	 *  @method _delete
	 */
	_delete = function (success, failure, repo, eim) {
		return EcRepository.DELETE(this, success, failure, repo, eim);
	};
	/**
	 *  Returns the ID of the Person
	 *
	 *  @return {String}
	 *  ID of person
	 */
	getId() {
		return this.id;
	}
	/**
	 *  Sets the ID of the Person
	 *
	 *  @param {String} id
	 *                  ID of the Person
	 */
	setId(id) {
		this.id = id;
	}
	/**
	 *  Returns the legacyId of the Person
	 *
	 *  @return {String}
	 *  legacyId of person
	 */
	getLegacyId() {
		return this.legacyId;
	}
	/**
	 *  Sets the legacyId of the Person
	 *
	 *  @param {String} id
	 *                  legacyId of the Person
	 */
	setLegacyId(id) {
		this.legacyId = id;
	}
	/**
	 *  Returns the first name of the Person
	 *
	 *  @return {String}
	 *  first name of person
	 */
	getFirstName() {
		return this.givenName;
	}
	/**
	 *  Sets the first name of the Person
	 *
	 *  @param {String} name
	 *                  first name of the Person
	 */
	setFirstName(name) {
		this.givenName = name;
	}
	/**
	 *  Returns the last name of the Person
	 *
	 *  @return {String}
	 *  last name of person
	 */
	getLastName() {
		return this.familyName;
	}
	/**
	 *  Sets the last name of the Person
	 *
	 *  @param {String} name
	 *                  last name of the Person
	 */
	setLastName(name) {
		this.familyName = name;
	}
	/**
	 *  Returns the combined name of the Person
	 *
	 *  @return {String}
	 *  combined name of person
	 */
	getName() {
		return this.name;
	}
	/**
	 *  Sets the combined name of the Person
	 *
	 *  @param {String} name
	 *                  combined name of the Person
	 */
	setName(name) {
		this.name = name;
	}
	/**
	 *  Returns the alternate name of the Person
	 *
	 *  @return {String}
	 *  username of person
	 */
	getUserName() {
		return this.alternateName;
	}
	/**
	 *  Sets the alternate name of the Person
	 *
	 *  @param {String} name
	 *                  username of the Person
	 */
	setUserName(name) {
		this.alternateName = name;
	}
	/**
	 *  Returns the job title of the Person
	 *
	 *  @return {String}
	 *  job title of person
	 */
	getJobTitle() {
		return this.jobTitle;
	}
	/**
	 *  Sets the job title of the Person
	 *
	 *  @param {String} title
	 *                  job title of the Person
	 */
	setJobTitle(title) {
		this.jobTitle = title;
	}
	/**
	 *  Returns the email of the Person
	 *
	 *  @return {String}
	 *  email of person
	 */
	getEmail() {
		return this.email;
	}
	/**
	 *  Sets the email of the Person
	 *
	 *  @param {String} email
	 *                  email of the Person
	 */
	setEmail(email) {
		this.email = email;
	}
	/**
	 *  Returns the telephone of the Person
	 *
	 *  @return {String}
	 *  telephone of person
	 */
	getPhone() {
		return this.telephone;
	}
	/**
	 *  Sets the telephone number of the Person
	 *
	 *  @param {String} phone
	 *                  telephone of the Person
	 */
	setPhone(phone) {
		this.telephone = phone;
	}
	/**
	 *  Returns the bio of the Person
	 *
	 *  @return {String}
	 *  bio of person
	 */
	getBio() {
		return this.description;
	}
	/**
	 *  Sets the bio of the Person
	 *
	 *  @param {String} bio
	 *                  bio of the Person
	 */
	setBio(bio) {
		this.description = bio;
	}
	/**
	 *  Returns the awards of the Person
	 *
	 *  @return {String}
	 *  awards of person
	 */
	getAwards() {
		return this.award;
	}
	/**
	 *  Sets the awards of the Person
	 *
	 *  @param {String} awards
	 *                  awards of the Person
	 */
	setAwards(awards) {
		this.award = awards;
	}
	/**
	 *  Returns the institution of the Person
	 *
	 *  @return {Organization}
	 *  affiliation of person
	 */
	getInstitution() {
		return this.affiliation;
	}
	/**
	 *  Sets the institution of the Person
	 *
	 *  @param {Organization} affiliation
	 *                        affiliation of the Person
	 */
	setInstitution(affiliation) {
		this.affiliation = affiliation;
	}
	/**
	 *  Returns the person's location state
	 *
	 *  @return {String}
	 *  location state of person
	 */
	getLocationState() {
		return this.addressRegion;
	}
	/**
	 *  Sets the location state of the Person
	 *
	 *  @param {String} state
	 *                  location state of the Person
	 */
	setLocationState(state) {
		this.addressRegion = state;
	}
	/**
	 *  Returns the person's location county
	 *
	 *  @return {String}
	 *  location county of person
	 */
	getLocationCounty() {
		return this.addressLocality;
	}
	/**
	 *  Sets the location county of the Person
	 *
	 *  @param {String} county
	 *                  location county of the Person
	 */
	setLocationCounty(county) {
		this.addressLocality = county;
	}
	/**
	 *  Returns the agreement status of the Person
	 *
	 *  @return {String}
	 *  agreement status of person
	 */
	getAgreementStatus() {
		return this.agreementStatus;
	}
	/**
	 *  Sets the agreement status number of the Person
	 *
	 *  @param {String} status
	 *                  agreement status of the Person
	 */
	setAgreementStatus(status) {
		this.agreementStatus = status;
	}
	/**
	 *  Returns the Account Created of the Person
	 *
	 *  @return {String}
	 *  account created of person
	 */
	getAccountCreated() {
		return this.dateCreated;
	}
	/**
	 *  Sets the account created date of the Person
	 *
	 *  @param {String} created
	 *                  account created of the Person
	 */
	setAccountCreated(created) {
		this.dateCreated = created;
	}
	/**
	 *  Returns the last active groups of the Person
	 *
	 *  @return {String}
	 *  last active groups of person
	 */
	getLastActiveAt() {
		return this.lastActiveAt;
	}
	/**
	 *  Sets the last active group of the Person
	 *
	 *  @param {String} lastGroups
	 *                  last active groups of the Person
	 */
	setLastActiveAt(lastGroups) {
		this.lastActiveAt = lastGroups;
	}
	/**
	 *  Returns the communities of the Person
	 *
	 *  @return {String}
	 *  communities of person
	 */
	getCommunities() {
		return this.communities;
	}
	/**
	 *  Sets the communities of the Person
	 *
	 *  @param {String} communities
	 *                  communities of the Person
	 */
	setCommunities(communities) {
		this.communities = communities;
	}
	/**
	 *  Returns the thumbnail image URL of the Person
	 *
	 *  @return {ImageObject}
	 *  image url of person
	 */
	getImage() {
		return this.image;
	}
	/**
	 *  Sets the thumbnail image URL of the Person
	 *
	 *  @param {ImageObject} image
	 *                       image object of the Person
	 */
	setImage(image) {
		this.image = image;
	}
	/**
	 *  Returns the person's web page
	 *
	 *  @return {String}
	 *  web page url of person
	 */
	getWebPage() {
		return this.sameAs;
	}
	/**
	 *  Sets the web page URL of the Person
	 *
	 *  @param {String} page
	 *                  web page url of the Person
	 */
	setWebPage(page) {
		this.sameAs = page;
	}
	/**
	 *  Returns the person object URL
	 *
	 *  @return {String}
	 *  url of person object
	 */
	getUrl() {
		return this.url;
	}
	/**
	 *  Sets the person object URL
	 *
	 *  @param {String} url
	 *                  url of the Person object
	 */
	setUrl(url) {
		this.url = url;
	}
	/**
	 *  Returns the person's position in URL form
	 *
	 *  @return {String}
	 *  URL of person's position
	 */
	getPosition() {
		return this.additionalType;
	}
	/**
	 *  Sets the person's position URL.
	 *  Validates url as an actual URL, and if not then looks for it in the positionLabels list. (Actual URLs saved as is)
	 *
	 *  @param {String} url
	 *                  url of the Person object
	 */
	setPosition(url) {
		this.initPositions();
		if (url.indexOf("http") > 0) this.additionalType = url;
		else if (ExtPerson.positionLabelsMap[url] != null)
			this.additionalType = ExtPerson.positionLabelsMap[url];
		else global.auditLogger.report(global.auditLogger.LogCategory.SYSTEM, global.auditLogger.Severity.ERROR, "ExtPersSetPos", "error: " + url + " not a supported position");
	}
	/**
	 *  Returns position label corresponding to the URL form
	 *
	 *  @param url URL of the person's position
	 *  @return {String}
	 */
	getPositionLabel(url) {
		this.initPositions();
		if (url != null && url.length > 0) {
			if (ExtPerson.positionUrlsMap[url] != null)
				return ExtPerson.positionUrlsMap[url];
			else return 'Position "' + url + '" not found.';
		} else return "";
	}
	/**
	 *  Returns position URL corresponding to the label form
	 *
	 *  @param type type label of the person's position
	 *  @return {String}
	 */
	getPositionUrl(type) {
		this.initPositions();
		if (type != null && type.length > 0) {
			if (ExtPerson.positionLabelsMap[type] != null)
				return ExtPerson.positionLabelsMap[type];
			else return 'Position "' + type + '" not found.';
		} else return "";
	}
	/**
	 *  Initializes positions arrays so that it can translate legacy position types to JSONLD format
	 */
	initPositions() {
		if (ExtPerson.positionLabelsMap["Administrator"] == null) {
			ExtPerson.positionLabelsMap = {};
			ExtPerson.positionLabelsMap["Administrative assistant"] =
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Administrative Assistant";
			ExtPerson.positionLabelsMap["Administrator"] =
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Administrator";
			ExtPerson.positionLabelsMap["Area or regional educator"] =
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/AreaOrRegionalEducator";
			ExtPerson.positionLabelsMap["Communicator"] =
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Communicator";
			ExtPerson.positionLabelsMap["County agent/educator"] =
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/CountyAgentOrEducator";
			ExtPerson.positionLabelsMap["Faculty"] =
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Faculty";
			ExtPerson.positionLabelsMap["Information technologist"] =
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/InformationTechnologist";
			ExtPerson.positionLabelsMap["Other"] =
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Other";
			ExtPerson.positionLabelsMap["Professional/staff development"] =
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/ProfessionalOrStaffDevelopment";
			ExtPerson.positionLabelsMap["Program assistant"] =
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/ProgramAssistant";
			ExtPerson.positionLabelsMap["Master gardener"] =
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/MasterGardener";
			ExtPerson.positionLabelsMap["Specialist"] =
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Specialist";
			ExtPerson.positionLabelsMap["Volunteer"] =
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Volunteer";
		}
		if (
			ExtPerson.positionUrlsMap[
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Administrator"
			] == null
		) {
			ExtPerson.positionUrlsMap = {};
			ExtPerson.positionUrlsMap[
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Administrative Assistant"
			] = "Administrative assistant";
			ExtPerson.positionUrlsMap[
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Administrator"
			] = "Administrator";
			ExtPerson.positionUrlsMap[
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/AreaOrRegionalEducator"
			] = "Area or regional educator";
			ExtPerson.positionUrlsMap[
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Communicator"
			] = "Communicator";
			ExtPerson.positionUrlsMap[
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/CountyAgentOrEducator"
			] = "County agent/educator";
			ExtPerson.positionUrlsMap[
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Faculty"
			] = "Faculty";
			ExtPerson.positionUrlsMap[
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/InformationTechnologist"
			] = "Information technologist";
			ExtPerson.positionUrlsMap[
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Other"
			] = "Other";
			ExtPerson.positionUrlsMap[
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/ProfessionalOrStaffDevelopment"
			] = "Professional/staff development";
			ExtPerson.positionUrlsMap[
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/ProgramAssistant"
			] = "Program assistant";
			ExtPerson.positionUrlsMap[
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/MasterGardener"
			] = "Master gardener";
			ExtPerson.positionUrlsMap[
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Specialist"
			] = "Specialist";
			ExtPerson.positionUrlsMap[
				"http://schema.eduworks.com/pebleXtension/0.1/positionType/Volunteer"
			] = "Volunteer";
		}
	}
};
