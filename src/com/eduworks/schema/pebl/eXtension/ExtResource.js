/**
 *  @author debbie.brown@eduworks.com
 */
module.exports = class ExtResource extends schema.CreativeWork {
	/**
	 *  Constructor, automatically sets @context and @type.
	 *
	 *  @constructor
	 */
	constructor() {
		super();
		this.context = "http://schema.eduworks.com/pebleXtension/0.1/";
		this.type = "Resource";
	}
	legacyId = null;
	/**
	 *  Retrieves the resource specified with the ID from the server
	 *
	 *  @param {String}               id
	 *                                ID of the resource to retrieve
	 *  @param {Callback1<ExtResource>} success
	 *                                Callback triggered on successfully retrieving the resource,
	 *                                returns the resource
	 *  @param {Callback1<String>}    [failure]
	 *                                Callback triggered if error while retrieving resource
	 *  @memberOf ExtResource
	 *  @method get
	 *  @static
	 */
	static get(id, success, failure, repo, eim) {
		return EcRepository.getAs(id, new ExtResource(), success, failure, repo, eim);
	}
	/**
	 *  Retrieves a resource from the server synchronously, the call
	 *  blocks until it is successful or an error occurs
	 *
	 *  @param {String} id
	 *                  ID of the resource to retrieve
	 *  @return ExtResource
	 *  The resource retrieved
	 *  @memberOf ExtResource
	 *  @method getBlocking
	 *  @static
	 */
	static getBlocking(id, repo, eim) {
		return EcRepository.getAs(id, new ExtResource(), null, null, repo, eim);
	}
	/**
	 *  Searches the repository using the query and optional parameters provided
	 *
	 *  @param {EcRepository}                repo
	 *                                       Repository to search using the query provided
	 *  @param {String}                      query
	 *                                       The query to send to the search
	 *  @param {Callback1<Array<ExtResource>>} success
	 *                                       Callback triggered on successful search return
	 *  @param {Callback1<String>}           [failure]
	 *                                       Callback triggered if error searching
	 *  @param {Object}                      [paramObj]
	 *                                       Parameters to include in the search
	 *  @param start
	 *  @param size
	 *  @memberOf ExtResource
	 *  @method search
	 *  @static
	 */
	static search(repo, query, success, failure, paramObj) {
		return EcRepository.searchAs(
			repo,
			query,
			() => new ExtResource(),
			success,
			failure,
			paramObj
		);
	}
	/**
	 *  Saves this resource on the server corresponding to its ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered on successfully saving the ExtResource
	 *  @param {Callback1<String>} [failure]
	 *                             Callback triggered if error while saving ExtResource
	 *  @return {ExtResource}
	 *  @memberOf ExtResource
	 *  @method save
	 */
	save(success, failure, repo, eim) {
		if (this.getId() == null || this.getId() == "") {
			var msg = "ID cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (this.getTitle() == null || this.getTitle() == "") {
			var msg = "Title cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (this.getLaunchURL() == null || this.getLaunchURL() == "") {
			var msg = "Launch URL cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		return EcRepository.save(this, success, failure, repo, eim);
	}
	/**
	 *  Deletes the resource from the server corresponding to its ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered on successfully deleting the resource
	 *  @param {Callback1<String>} [failure]
	 *                             Callback triggered if error while deleting resource
	 *  @memberOf ExtResource
	 *  @method _delete
	 */
	_delete = function (success, failure, repo, eim) {
		return EcRepository.DELETE(this, success, failure, repo, eim);
	};
	/**
	 *  Returns the ID of the resource
	 *
	 *  @return {String}
	 *  ID of resource
	 */
	getId() {
		return this.id;
	}
	/**
	 *  Sets the ID of the resource
	 *
	 *  @param {String} id
	 *                  ID of the resource
	 */
	setId(id) {
		this.id = id;
	}
	/**
	 *  Returns the legacyId of the resource
	 *
	 *  @return {String}
	 *  legacyId of resource
	 */
	getLegacyId() {
		return this.legacyId;
	}
	/**
	 *  Sets the legacyId of the resource
	 *
	 *  @param {String} id
	 *                  legacyId of the resource
	 */
	setLegacyId(id) {
		this.legacyId = id;
	}
	/**
	 *  Returns the author of the resource
	 *
	 *  @return {Person}
	 *  author of resource
	 */
	getAuthor() {
		return this.author;
	}
	/**
	 *  Sets the author of the resource
	 *
	 *  @param {Person} creator
	 */
	setAuthor(creator) {
		this.author = creator;
	}
	/**
	 *  Returns the title of the resource
	 *
	 *  @return {String}
	 *  title of resource
	 */
	getTitle() {
		return this.name;
	}
	/**
	 *  Sets the title of the resource
	 *
	 *  @param {String} title
	 *                  title of the resource
	 */
	setTitle(title) {
		this.name = title;
	}
	/**
	 *  Returns the description of the resource
	 *
	 *  @return {String}
	 *  description of resource
	 */
	getDescription() {
		return this.description;
	}
	/**
	 *  Sets the description of the resource
	 *
	 *  @param {String} description
	 *                  description of the resource
	 */
	setDescription(description) {
		this.description = description;
	}
	/**
	 *  Returns the text of the resource
	 *
	 *  @return {String}
	 *  text of resource
	 */
	getText() {
		return this.text;
	}
	/**
	 *  Sets the text of the resource
	 *
	 *  @param {String} text
	 *                  text of the resource
	 */
	setText(text) {
		this.text = text;
	}
	/**
	 *  Returns the genre/category of the resource
	 *
	 *  @return {String}
	 *  genre of resource
	 */
	getCategory() {
		return this.genre;
	}
	/**
	 *  Sets the genre/category of the resource
	 *
	 *  @param {String} name
	 *                  category of the resource
	 */
	setCategory(name) {
		this.genre = name;
	}
	/**
	 *  Returns the additionalType of the resource
	 *
	 *  @return {String}
	 *  additionalType of resource
	 */
	getAdditionalType() {
		return this.additionalType;
	}
	/**
	 *  Sets the additionalType of the resource
	 *
	 *  @param {String} name
	 *                  additionalType of the resource
	 */
	setAdditionalType(name) {
		this.additionalType = name;
	}
	/**
	 *  Returns the keywords of the resource
	 *
	 *  @return {String}
	 *  keywords of resource
	 */
	getKeywords() {
		return this.keywords;
	}
	/**
	 *  Sets the keywords of the resource
	 *
	 *  @param {String} name
	 *                  keywords of the resource
	 */
	setKeywords(name) {
		this.keywords = name;
	}
	/**
	 *  Returns the institution of the resource
	 *
	 *  @return {Person}
	 *  publisher of resource
	 */
	getInstitution() {
		return this.publisher;
	}
	/**
	 *  Sets the institution of the resource
	 *
	 *  @param {Organization} institution
	 *                        institution of the resource
	 */
	setInstitution(institution) {
		this.publisher = institution;
	}
	/**
	 *  Returns the community of the resource
	 *
	 *  @return {Organization}
	 *  community of resource
	 */
	getCommunity() {
		return this.sourceOrganization;
	}
	/**
	 *  Sets the community of the resource
	 *
	 *  @param {Organization} community
	 *                        community of the resource
	 */
	setCommunity(community) {
		this.sourceOrganization = community;
	}
	/**
	 *  Returns the resource's launch URL
	 *
	 *  @return {String}
	 *  launch url of resource
	 */
	getLaunchURL() {
		return this.sameAs;
	}
	/**
	 *  Sets the launch URL of the resource
	 *
	 *  @param {String} page
	 *                  Launch url of the resource
	 */
	setLaunchURL(page) {
		this.sameAs = page;
	}
	/**
	 *   Returns the resource's authoring URL
	 *
	 *   @return {Product}
	 *   authoring url of resource
	 */
	getAuthoringURL() {
		return this.isBasedOn;
	}
	/**
	 *   Sets the authoring URL of the resource
	 *
	 *   @param {String} page
	 *                   Authoring url of the resource
	 */
	setAuthoringURL(page) {
		this.isBasedOn = page;
	}
	/**
	 *  Returns the resource object URL
	 *
	 *  @return {String}
	 *  url of resource object
	 */
	getUrl() {
		return this.url;
	}
	/**
	 *  Sets the resource object URL
	 *
	 *  @param {String} url
	 *                  url of the resource object
	 */
	setUrl(url) {
		this.url = url;
	}
};
