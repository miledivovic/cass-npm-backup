/**
 *  @author debbie.brown@eduworks.com
 */
var ExtResource = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.eduworks.com/pebleXtension/0.1/";
    this.type = "Resource";
};
ExtResource = stjs.extend(ExtResource, CreativeWork, [], function(constructor, prototype) {
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
    static get(id, success, failure) {
        EcRepository.get(id, function(p1) {
            if (stjs.isInstanceOf(p1.constructor, ExtResource)) 
                if (success != null) {
                    success(p1);
                    return;
                }
            var resource = new ExtResource();
            if (p1.isA(EcEncryptedValue.myType)) {
                var encrypted = new EcEncryptedValue();
                encrypted.copyFrom(p1);
                p1 = encrypted.decryptIntoObject();
            }
            if (p1.isAny(resource.getTypes())) {
                resource.copyFrom(p1);
                if (EcRepository.caching) {
                    (EcRepository.cache)[resource.shortId()] = resource;
                    (EcRepository.cache)[resource.id] = resource;
                }
                if (success != null) 
                    success(resource);
            } else {
                var msg = "Resultant object is not a resource.";
                if (failure != null) 
                    failure(msg);
                 else 
                    console.error(msg);
            }
        }, failure);
    };
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
    static getBlocking(id) {
        var p1 = EcRepository.getBlocking(id);
        if (stjs.isInstanceOf(p1.constructor, ExtResource)) 
            return p1;
        var resource = new ExtResource();
        if (p1.isA(EcEncryptedValue.myType)) {
            var encrypted = new EcEncryptedValue();
            encrypted.copyFrom(p1);
            p1 = encrypted.decryptIntoObject();
            EcEncryptedValue.encryptOnSave(p1.id, true);
        }
        if (p1.isAny(resource.getTypes())) {
            resource.copyFrom(p1);
            if (EcRepository.caching) {
                (EcRepository.cache)[resource.shortId()] = resource;
                (EcRepository.cache)[resource.id] = resource;
            }
            return resource;
        } else {
            var msg = "Retrieved object was not a resource";
            console.error(msg);
            return null;
        }
    };
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
        var queryAdd = new ExtResource().getSearchStringByType();
        if (query == null || query == "") 
            query = queryAdd;
         else 
            query = "(" + query + ") AND " + queryAdd;
        repo.searchWithParams(query, paramObj, null, function(p1) {
            if (success != null) {
                var ret = [];
                for (var i = 0; i < p1.length; i++) {
                    var resource = new ExtResource();
                    resource.copyFrom(p1[i]);
                    ret[i] = resource;
                }
                success(ret);
            }
        }, failure);
    };
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
    save(success, failure) {
        if (this.getId() == null || this.getId() == "") {
            var msg = "ID cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        if (this.getTitle() == null || this.getTitle() == "") {
            var msg = "Title cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        if (this.getLaunchURL() == null || this.getLaunchURL() == "") {
            var msg = "Launch URL cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        EcRepository.save(this, success, failure);
        return "Resource " + this.getId() + " saved.";
    };
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
    prototype._delete = function(success, failure) {
        EcRepository.DELETE(this, success, failure);
    };
    /**
     *  Returns the ID of the resource
     * 
     *  @return {String}
     *  ID of resource
     */
    getId() {
        return this.id;
    };
    /**
     *  Sets the ID of the resource
     * 
     *  @param {String} id
     *                  ID of the resource
     */
    setId(id) {
        this.id = id;
    };
    /**
     *  Returns the legacyId of the resource
     * 
     *  @return {String}
     *  legacyId of resource
     */
    getLegacyId() {
        return this.legacyId;
    };
    /**
     *  Sets the legacyId of the resource
     * 
     *  @param {String} id
     *                  legacyId of the resource
     */
    setLegacyId(id) {
        this.legacyId = id;
    };
    /**
     *  Returns the author of the resource
     * 
     *  @return {Person}
     *  author of resource
     */
    getAuthor() {
        return this.author;
    };
    /**
     *  Sets the author of the resource
     * 
     *  @param {Person} creator
     */
    setAuthor(creator) {
        this.author = creator;
    };
    /**
     *  Returns the title of the resource
     * 
     *  @return {String}
     *  title of resource
     */
    getTitle() {
        return this.name;
    };
    /**
     *  Sets the title of the resource
     * 
     *  @param {String} title
     *                  title of the resource
     */
    setTitle(title) {
        this.name = title;
    };
    /**
     *  Returns the description of the resource
     * 
     *  @return {String}
     *  description of resource
     */
    getDescription() {
        return this.description;
    };
    /**
     *  Sets the description of the resource
     * 
     *  @param {String} description
     *                  description of the resource
     */
    setDescription(description) {
        this.description = description;
    };
    /**
     *  Returns the text of the resource
     * 
     *  @return {String}
     *  text of resource
     */
    getText() {
        return this.text;
    };
    /**
     *  Sets the text of the resource
     * 
     *  @param {String} text
     *                  text of the resource
     */
    setText(text) {
        this.text = text;
    };
    /**
     *  Returns the genre/category of the resource
     * 
     *  @return {String}
     *  genre of resource
     */
    getCategory() {
        return this.genre;
    };
    /**
     *  Sets the genre/category of the resource
     * 
     *  @param {String} name
     *                  category of the resource
     */
    setCategory(name) {
        this.genre = name;
    };
    /**
     *  Returns the additionalType of the resource
     * 
     *  @return {String}
     *  additionalType of resource
     */
    getAdditionalType() {
        return this.additionalType;
    };
    /**
     *  Sets the additionalType of the resource
     * 
     *  @param {String} name
     *                  additionalType of the resource
     */
    setAdditionalType(name) {
        this.additionalType = name;
    };
    /**
     *  Returns the keywords of the resource
     * 
     *  @return {String}
     *  keywords of resource
     */
    getKeywords() {
        return this.keywords;
    };
    /**
     *  Sets the keywords of the resource
     * 
     *  @param {String} name
     *                  keywords of the resource
     */
    setKeywords(name) {
        this.keywords = name;
    };
    /**
     *  Returns the institution of the resource
     * 
     *  @return {Person}
     *  publisher of resource
     */
    getInstitution() {
        return this.publisher;
    };
    /**
     *  Sets the institution of the resource
     * 
     *  @param {Organization} institution
     *                        institution of the resource
     */
    setInstitution(institution) {
        this.publisher = institution;
    };
    /**
     *  Returns the community of the resource
     * 
     *  @return {Organization}
     *  community of resource
     */
    getCommunity() {
        return this.sourceOrganization;
    };
    /**
     *  Sets the community of the resource
     * 
     *  @param {Organization} community
     *                        community of the resource
     */
    setCommunity(community) {
        this.sourceOrganization = community;
    };
    /**
     *  Returns the resource's launch URL
     * 
     *  @return {String}
     *  launch url of resource
     */
    getLaunchURL() {
        return this.sameAs;
    };
    /**
     *  Sets the launch URL of the resource
     * 
     *  @param {String} page
     *                  Launch url of the resource
     */
    setLaunchURL(page) {
        this.sameAs = page;
    };
    /**
     *   Returns the resource's authoring URL
     * 
     *   @return {Product}
     *   authoring url of resource
     */
    getAuthoringURL() {
        return this.isBasedOn;
    };
    /**
     *   Sets the authoring URL of the resource
     * 
     *   @param {String} page
     *                   Authoring url of the resource
     */
    setAuthoringURL(page) {
        this.isBasedOn = page;
    };
    /**
     *  Returns the resource object URL
     * 
     *  @return {String}
     *  url of resource object
     */
    getUrl() {
        return this.url;
    };
    /**
     *  Sets the resource object URL
     * 
     *  @param {String} url
     *                  url of the resource object
     */
    setUrl(url) {
        this.url = url;
    };
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
