const EcRepository = require("../../../../../org/cassproject/ebac/repository/EcRepository");

/**
 *  @author debbie.brown@eduworks.com
 */
module.exports = class ExtInstitution extends schema.Organization {
	/**
	 *  Constructor, automatically sets @context and @type.
	 *
	 *  @constructor
	 */
	constructor() {
		super();
		this.context = "http://schema.eduworks.com/pebleXtension/0.1/";
		this.type = "Institution";
	}
	static EMPLOYEE_TYPE_ADMINISTRATOR = "administrator";
	static EMPLOYEE_TYPE_ASSISTANT = "assistant";
	static EMPLOYEE_TYPE_IT = "IT";
	/**
	 *  ExtInstitution objects use the following elements from schema.org/Organization:
	 *  - id
	 *  - context
	 *  - type
	 *  - url
	 *  - name
	 *  - description
	 *  - sameAs
	 *  - address
	 *  - telephone
	 *  - faxNumber
	 *  - areaServed (ECOP Region)
	 *  - member (for administrators)
	 *  - employee (for assistant)
	 *  - contactPoint (for IT poc)
	 *  - logo
	 */
	legacyId = null;
	locationState = null;
	memberCount = null;
	communityLink = null;
	/**
	 *  Retrieves the institution specified with the ID from the server
	 *
	 *  @param {String}                    id
	 *                                     ID of the institution to retrieve
	 *  @param {Callback1<ExtInstitution>} success
	 *                                     Callback triggered on successfully retrieving the institution,
	 *                                     returns the institution
	 *  @param {Callback1<String>}         [failure]
	 *                                     Callback triggered if error while retrieving institution
	 *  @memberOf ExtInstitution
	 *  @method get
	 *  @static
	 */
	static get(id, success, failure, repo, eim) {
		return EcRepository.getAs(id, new ExtInstitution(), success, failure, repo, eim);
	}
	/**
	 *  Retrieves a institution from the server synchronously, the call
	 *  blocks until it is successful or an error occurs
	 *
	 *  @param {String} id
	 *                  ID of the institution to retrieve
	 *  @return ExtInstitution
	 *  The institution retrieved
	 *  @memberOf ExtInstitution
	 *  @method getBlocking
	 *  @static
	 */
	static getBlocking(id, repo, eim) {
		return EcRepository.getAs(id, new ExtInstitution(), null, null, repo, eim);
	}
	/**
	 *  Searches the repository using the query and optional parameters provided
	 *
	 *  @param {EcRepository}                     repo
	 *                                            Repository to search using the query provided
	 *  @param {String}                           query
	 *                                            The query to send to the search
	 *  @param {Callback1<Array<ExtInstitution>>} success
	 *                                            Callback triggered on successful search return
	 *  @param {Callback1<String>}                [failure]
	 *                                            Callback triggered if error searching
	 *  @param {Object}                           [paramObj]
	 *                                            Parameters to include in the search
	 *  @param start
	 *  @param size
	 *  @memberOf ExtInstitution
	 *  @method search
	 *  @static
	 */
	static search(repo, query, success, failure, paramObj, eim) {
		return EcRepository.searchAs(
			repo,
			query,
			() => new ExtInstitution(),
			success,
			failure,
			paramObj, eim
		);
	}
	/**
	 *  Saves this institution on the server corresponding to its ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered on successfully saving the ExtInstitution
	 *  @param {Callback1<String>} [failure]
	 *                             Callback triggered if error while saving ExtInstitution
	 *  @return {ExtInstitution}
	 *  @memberOf ExtInstitution
	 *  @method save
	 */
	save(success, failure, repo, eim) {
		if (this.getId() == null || this.getId() == "") {
			let msg = "ID cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (this.getName() == null || this.getName() == "") {
			let msg = "Name cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (this.getWebPage() == null || this.getWebPage() == "") {
			let msg = "Official web page cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		return EcRepository.save(this, success, failure, repo, eim);
	}
	/**
	 *  Deletes the institution from the server corresponding to its ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered on successfully deleting the institution
	 *  @param {Callback1<String>} [failure]
	 *                             Callback triggered if error while deleting institution
	 *  @memberOf ExtInstitution
	 *  @method _delete
	 */
	_delete = function (success, failure, repo, eim) {
		return EcRepository.DELETE(this, success, failure, repo, eim);
	};
	/**
	 *  Returns the ID of the Institution
	 *
	 *  @return {String}
	 *  ID of institution
	 */
	getId() {
		return this.id;
	}
	/**
	 *  Sets the ID of the Institution
	 *
	 *  @param {String} id
	 *                  ID of the Institution
	 */
	setId(id) {
		this.id = id;
	}
	/**
	 *  Returns the legacyId of the Institution
	 *
	 *  @return {String}
	 *  legacyId of institution
	 */
	getLegacyId() {
		return this.legacyId;
	}
	/**
	 *  Sets the legacyId of the Institution
	 *
	 *  @param {String} id
	 *                  legacyId of the Institution
	 */
	setLegacyId(id) {
		this.legacyId = id;
	}
	/**
	 *  Returns the name of the Institution
	 *
	 *  @return {String}
	 *  name of institution
	 */
	getName() {
		return this.name;
	}
	/**
	 *  Sets the first name of the Institution
	 *
	 *  @param {String} name
	 *                  first name of the Institution
	 */
	setName(name) {
		this.name = name;
	}
	/**
	 *  Returns the alternate name of the Institution
	 *
	 *  @return {String}
	 *  alternate name of institution
	 */
	getAlternateName() {
		return this.alternateName;
	}
	/**
	 *  Sets the alternate name of the Institution
	 *
	 *  @param {String} name
	 *                  alternate name of the Institution
	 */
	setAlternateName(name) {
		this.alternateName = name;
	}
	/**
	 *  Returns the telephone of the Institution
	 *
	 *  @return {String}
	 *  telephone of institution
	 */
	getPhone() {
		return this.telephone;
	}
	/**
	 *  Sets the telephone number of the Institution
	 *
	 *  @param {String} phone
	 *                  telephone of the Institution
	 */
	setPhone(phone) {
		this.telephone = phone;
	}
	/**
	 *  Returns the fax of the Institution
	 *
	 *  @return {String}
	 *  fax of institution
	 */
	getFax() {
		return this.faxNumber;
	}
	/**
	 *  Sets the fax number of the Institution
	 *
	 *  @param {String} fax
	 *                  fax of the Institution
	 */
	setFax(fax) {
		this.faxNumber = fax;
	}
	/**
	 *  Returns the description of the Institution
	 *
	 *  @return {String}
	 *  description of institution
	 */
	getDescription() {
		return this.description;
	}
	/**
	 *  Sets the description of the Institution
	 *
	 *  @param {String} desc
	 *                  description of the Institution
	 */
	setDescription(desc) {
		this.description = desc;
	}
	/**
	 *  Returns the institution's web page
	 *
	 *  @return {String}
	 *  web page url of institution
	 */
	getWebPage() {
		return this.sameAs;
	}
	/**
	 *  Sets the web page URL of the Institution
	 *
	 *  @param {String} page
	 *                  web page url of the Institution
	 */
	setWebPage(page) {
		this.sameAs = page;
	}
	/**
	 *  Returns the institution's people community link
	 *
	 *  @return {String}
	 *  people community link of institution
	 */
	getCommunityLink() {
		return this.communityLink;
	}
	/**
	 *  Sets the people community link of the Institution
	 *
	 *  @param {String} page
	 *                  people community link of the Institution
	 */
	setCommunityLink(page) {
		this.communityLink = page;
	}
	/**
	 *  Returns the institution object URL
	 *
	 *  @return {String}
	 *  url of institution object
	 */
	getUrl() {
		return this.url;
	}
	/**
	 *  Sets the institution object URL
	 *
	 *  @param {String} url
	 *                  url of the Institution object
	 */
	setUrl(url) {
		this.url = url;
	}
	/**
	 *  Returns the institution's location state
	 *
	 *  @return {String}
	 *  location state of institution
	 */
	getLocationState() {
		return this.locationState;
	}
	/**
	 *  Sets the location state of the Institution
	 *
	 *  @param {String} state
	 *                  location state of the Institution
	 */
	setLocationState(state) {
		this.locationState = state;
	}
	/**
	 *  Returns the thumbnail image URL of the institution
	 *
	 *  @return {ImageObject}
	 *  image url of institution
	 */
	getImage() {
		return this.logo;
	}
	/**
	 *  Sets the thumbnail image URL of the institution
	 *
	 *  @param {ImageObject} image
	 *                       image object of the institution
	 */
	setImage(image) {
		this.logo = image;
	}
	/**
	 *  Returns the institution's region
	 *
	 *  @return {String}
	 *  region of institution
	 */
	getRegion() {
		return this.areaServed.toString();
	}
	/**
	 *  Sets the region of the Institution
	 *
	 *  @param {String} region
	 *                  region of the Institution
	 */
	setRegion(region) {
		this.areaServed = region;
	}
	/**
	 *  Returns the institution's number of members
	 *
	 *  @return {}
	 *  number of members at institution
	 */
	getMemberCount() {
		return this.memberCount;
	}
	/**
	 *  Sets the member count for the Institution
	 *
	 *  @param {String} count
	 *                  member count at the Institution
	 */
	setMemberCount(count) {
		this.memberCount = count;
	}
	/**
	 *  Returns the assistant POC of the Institution
	 *
	 *  @return {Person}
	 *  assistant poc of institution
	 */
	getAssistantPOC() {
		return this.employee;
	}
	/**
	 *  Sets assistant POC for the Institution
	 *
	 *  @param {Person} poc
	 *                  assistant POC at the Institution
	 */
	setAssistantPOC(poc) {
		this.employee = poc;
	}
	/**
	 *  Returns the administrative POC of the Institution
	 *
	 *  @return {Organization}
	 *  administrative poc of institution
	 */
	getAdminPOC() {
		return this.member;
	}
	/**
	 *  Sets administrative POC for the Institution
	 *
	 *  @param {Organization} poc
	 *                  administrativePOC at the Institution
	 */
	setAdminPOC(poc) {
		this.member = poc;
	}
	/**
	 *  Returns the IT POC of the Institution
	 *
	 *  @return {ContactPoint}
	 *  IT poc of institution
	 */
	getITPOC() {
		return this.contactPoint;
	}
	/**
	 *  Sets IT POC for the Institution
	 *
	 *  @param {ContactPoint} poc
	 *                        IT POC at the Institution
	 */
	setITPOC(poc) {
		this.contactPoint = poc;
	}
	/**
	 *  Adds a POC for the institution from raw contact information
	 *
	 *  @param {String} type
	 *  @param {String} name
	 *  @param {String} title
	 *  @param {String} email
	 *  @param {String} phone
	 *  @param {String} fax
	 *  @param {String} addr1
	 *  @param {String} addr2
	 *  @param {String} addrCityState
	 *  @param {String} addrZip
	 */
	addPOC(
		type,
		name,
		title,
		email,
		phone,
		fax,
		addr1,
		addr2,
		addr3,
		addrCityState,
		addrZip
	) {
		let addr = new PostalAddress();
		if (
			addr1 != null &&
			addr1 != "" &&
			addr2 != null &&
			addr2 != "" &&
			addr3 != null &&
			addr3 != ""
		) {
			addr.name = addr1.trim();
			addr.streetAddress = addr2.trim() + ", " + addr3.trim();
		} else if (
			addr1 != null &&
			addr1 != "" &&
			addr2 != null &&
			addr2 != ""
		) {
			addr.streetAddress = addr1.trim() + ", " + addr2.trim();
		} else if (addr1 != null && addr1 != "") {
			addr.streetAddress = addr1.trim();
		}
		if (addrCityState != null && addrCityState != "") {
			addr.addressLocality = addrCityState
				.substring(0, addrCityState.indexOf(","))
				.trim();
			addr.addressRegion = addrCityState
				.substring(addrCityState.indexOf(",") + 1)
				.trim();
		}
		if (addrZip != null && addrZip != "") addr.postalCode = addrZip.trim();
		if (
			type.equals(ExtInstitution.EMPLOYEE_TYPE_ADMINISTRATOR) ||
			type.equals(ExtInstitution.EMPLOYEE_TYPE_ASSISTANT)
		) {
			let poc = new Person();
			if (name != null && name != "") poc.name = name.trim();
			if (title != null && title != "") poc.jobTitle = title.trim();
			if (phone != null && phone != "") poc.telephone = phone.trim();
			if (fax != null && fax != "") poc.faxNumber = fax.trim();
			if (email != null && email != "") poc.email = email.trim();
			if (
				addr1 != null && addr1 != "" ||
				addr2 != null && addr2 != "" ||
				addr3 != null && addr3 != "" ||
				addrCityState != null && addrCityState != "" ||
				addrZip != null && addrZip != ""
			)
				poc.address = addr;
			if (type.equals(ExtInstitution.EMPLOYEE_TYPE_ADMINISTRATOR)) {
				let o = new Organization();
				o.employee = poc;
				this.setAdminPOC(o);
			} else if (type.equals(ExtInstitution.EMPLOYEE_TYPE_ASSISTANT))
				this.setAssistantPOC(poc);
		} else if (type.equals(ExtInstitution.EMPLOYEE_TYPE_IT)) {
			let poc = new ContactPoint();
			if (name != null && name != "") poc.name = name.trim();
			if (title != null && title != "") poc.contactType = title.trim();
			if (phone != null && phone != "") poc.telephone = phone.trim();
			if (fax != null && fax != "") poc.faxNumber = fax.trim();
			if (email != null && email != "") poc.email = email.trim();
			if (addr1 != null && addr1 != "" && addr2 != null && addr2 != "")
				poc.sameAs = addr1.trim() + ", " + addr2;
			else if (addr1 != null && addr1 != "") poc.sameAs = addr1.trim();
			else if (addr2 != null && addr2 != "") poc.sameAs = addr2.trim();
			this.setITPOC(poc);
		}
	}
};
