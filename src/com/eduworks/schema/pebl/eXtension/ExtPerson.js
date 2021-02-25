/**
 *  @author debbie.brown@eduworks.com
 */
var ExtPerson = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Person.call(this);
    this.context = "http://schema.eduworks.com/pebleXtension/0.1/";
    this.type = "Person";
};
ExtPerson = stjs.extend(ExtPerson, Person, [], function(constructor, prototype) {
    constructor.positionLabelsMap = {};
    constructor.positionUrlsMap = {};
    prototype.legacyId = null;
    prototype.agreementStatus = null;
    prototype.addressRegion = null;
    prototype.addressLocality = null;
    prototype.lastActiveAt = null;
    prototype.communities = null;
    prototype.dateCreated = null;
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
    constructor.get = function(id, success, failure) {
        EcRepository.get(id, function(p1) {
            if (stjs.isInstanceOf(p1.constructor, ExtPerson)) 
                if (success != null) {
                    success(p1);
                    return;
                }
            var person = new ExtPerson();
            if (p1.isA(EcEncryptedValue.myType)) {
                var encrypted = new EcEncryptedValue();
                encrypted.copyFrom(p1);
                p1 = encrypted.decryptIntoObject();
            }
            if (p1.isAny(person.getTypes())) {
                person.copyFrom(p1);
                if (EcRepository.caching) {
                    (EcRepository.cache)[person.shortId()] = person;
                    (EcRepository.cache)[person.id] = person;
                }
                if (success != null) 
                    success(person);
            } else {
                var msg = "Resultant object is not a person.";
                if (failure != null) 
                    failure(msg);
                 else 
                    console.error(msg);
            }
        }, failure);
    };
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
    constructor.getBlocking = function(id) {
        var p1 = EcRepository.getBlocking(id);
        if (stjs.isInstanceOf(p1.constructor, ExtPerson)) 
            return p1;
        var person = new ExtPerson();
        if (p1.isA(EcEncryptedValue.myType)) {
            var encrypted = new EcEncryptedValue();
            encrypted.copyFrom(p1);
            p1 = encrypted.decryptIntoObject();
            EcEncryptedValue.encryptOnSave(p1.id, true);
        }
        if (p1.isAny(person.getTypes())) {
            person.copyFrom(p1);
            if (EcRepository.caching) {
                (EcRepository.cache)[person.shortId()] = person;
                (EcRepository.cache)[person.id] = person;
            }
            return person;
        } else {
            var msg = "Retrieved object was not a person";
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
    constructor.search = function(repo, query, success, failure, paramObj) {
        var queryAdd = new ExtPerson().getSearchStringByType();
        if (query == null || query == "") 
            query = queryAdd;
         else 
            query = "(" + query + ") AND " + queryAdd;
        repo.searchWithParams(query, paramObj, null, function(p1) {
            if (success != null) {
                var ret = [];
                for (var i = 0; i < p1.length; i++) {
                    var person = new ExtPerson();
                    person.copyFrom(p1[i]);
                    ret[i] = person;
                }
                success(ret);
            }
        }, failure);
    };
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
    prototype.save = function(success, failure) {
        if (this.getId() == null || this.getId() == "") {
            var msg = "ID cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        if (this.getFirstName() == null || this.getFirstName() == "") {
            var msg = "First name cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        if (this.getLastName() == null || this.getLastName() == "") {
            var msg = "Last name cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        if (this.getUserName() == null || this.getUserName() == "") {
            var msg = "Username cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        if (this.getEmail() == null || this.getEmail() == "") {
            var msg = "Email cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        EcRepository.save(this, success, failure);
        return "Person " + this.getId() + " saved.";
    };
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
    prototype._delete = function(success, failure) {
        EcRepository.DELETE(this, success, failure);
    };
    /**
     *  Returns the ID of the Person
     * 
     *  @return {String}
     *  ID of person
     */
    prototype.getId = function() {
        return this.id;
    };
    /**
     *  Sets the ID of the Person
     * 
     *  @param {String} id
     *                  ID of the Person
     */
    prototype.setId = function(id) {
        this.id = id;
    };
    /**
     *  Returns the legacyId of the Person
     * 
     *  @return {String}
     *  legacyId of person
     */
    prototype.getLegacyId = function() {
        return this.legacyId;
    };
    /**
     *  Sets the legacyId of the Person
     * 
     *  @param {String} id
     *                  legacyId of the Person
     */
    prototype.setLegacyId = function(id) {
        this.legacyId = id;
    };
    /**
     *  Returns the first name of the Person
     * 
     *  @return {String}
     *  first name of person
     */
    prototype.getFirstName = function() {
        return this.givenName;
    };
    /**
     *  Sets the first name of the Person
     * 
     *  @param {String} name
     *                  first name of the Person
     */
    prototype.setFirstName = function(name) {
        this.givenName = name;
    };
    /**
     *  Returns the last name of the Person
     * 
     *  @return {String}
     *  last name of person
     */
    prototype.getLastName = function() {
        return this.familyName;
    };
    /**
     *  Sets the last name of the Person
     * 
     *  @param {String} name
     *                  last name of the Person
     */
    prototype.setLastName = function(name) {
        this.familyName = name;
    };
    /**
     *  Returns the combined name of the Person
     * 
     *  @return {String}
     *  combined name of person
     */
    prototype.getName = function() {
        return this.name;
    };
    /**
     *  Sets the combined name of the Person
     * 
     *  @param {String} name
     *                  combined name of the Person
     */
    prototype.setName = function(name) {
        this.name = name;
    };
    /**
     *  Returns the alternate name of the Person
     * 
     *  @return {String}
     *  username of person
     */
    prototype.getUserName = function() {
        return this.alternateName;
    };
    /**
     *  Sets the alternate name of the Person
     * 
     *  @param {String} name
     *                  username of the Person
     */
    prototype.setUserName = function(name) {
        this.alternateName = name;
    };
    /**
     *  Returns the job title of the Person
     * 
     *  @return {String}
     *  job title of person
     */
    prototype.getJobTitle = function() {
        return this.jobTitle;
    };
    /**
     *  Sets the job title of the Person
     * 
     *  @param {String} title
     *                  job title of the Person
     */
    prototype.setJobTitle = function(title) {
        this.jobTitle = title;
    };
    /**
     *  Returns the email of the Person
     * 
     *  @return {String}
     *  email of person
     */
    prototype.getEmail = function() {
        return this.email;
    };
    /**
     *  Sets the email of the Person
     * 
     *  @param {String} email
     *                  email of the Person
     */
    prototype.setEmail = function(email) {
        this.email = email;
    };
    /**
     *  Returns the telephone of the Person
     * 
     *  @return {String}
     *  telephone of person
     */
    prototype.getPhone = function() {
        return this.telephone;
    };
    /**
     *  Sets the telephone number of the Person
     * 
     *  @param {String} phone
     *                  telephone of the Person
     */
    prototype.setPhone = function(phone) {
        this.telephone = phone;
    };
    /**
     *  Returns the bio of the Person
     * 
     *  @return {String}
     *  bio of person
     */
    prototype.getBio = function() {
        return this.description;
    };
    /**
     *  Sets the bio of the Person
     * 
     *  @param {String} bio
     *                  bio of the Person
     */
    prototype.setBio = function(bio) {
        this.description = bio;
    };
    /**
     *  Returns the awards of the Person
     * 
     *  @return {String}
     *  awards of person
     */
    prototype.getAwards = function() {
        return this.award;
    };
    /**
     *  Sets the awards of the Person
     * 
     *  @param {String} awards
     *                  awards of the Person
     */
    prototype.setAwards = function(awards) {
        this.award = awards;
    };
    /**
     *  Returns the institution of the Person
     * 
     *  @return {Organization}
     *  affiliation of person
     */
    prototype.getInstitution = function() {
        return this.affiliation;
    };
    /**
     *  Sets the institution of the Person
     * 
     *  @param {Organization} affiliation
     *                        affiliation of the Person
     */
    prototype.setInstitution = function(affiliation) {
        this.affiliation = affiliation;
    };
    /**
     *  Returns the person's location state
     * 
     *  @return {String}
     *  location state of person
     */
    prototype.getLocationState = function() {
        return this.addressRegion;
    };
    /**
     *  Sets the location state of the Person
     * 
     *  @param {String} state
     *                  location state of the Person
     */
    prototype.setLocationState = function(state) {
        this.addressRegion = state;
    };
    /**
     *  Returns the person's location county
     * 
     *  @return {String}
     *  location county of person
     */
    prototype.getLocationCounty = function() {
        return this.addressLocality;
    };
    /**
     *  Sets the location county of the Person
     * 
     *  @param {String} county
     *                  location county of the Person
     */
    prototype.setLocationCounty = function(county) {
        this.addressLocality = county;
    };
    /**
     *  Returns the agreement status of the Person
     * 
     *  @return {String}
     *  agreement status of person
     */
    prototype.getAgreementStatus = function() {
        return this.agreementStatus;
    };
    /**
     *  Sets the agreement status number of the Person
     * 
     *  @param {String} status
     *                  agreement status of the Person
     */
    prototype.setAgreementStatus = function(status) {
        this.agreementStatus = status;
    };
    /**
     *  Returns the Account Created of the Person
     * 
     *  @return {String}
     *  account created of person
     */
    prototype.getAccountCreated = function() {
        return this.dateCreated;
    };
    /**
     *  Sets the account created date of the Person
     * 
     *  @param {String} created
     *                  account created of the Person
     */
    prototype.setAccountCreated = function(created) {
        this.dateCreated = created;
    };
    /**
     *  Returns the last active groups of the Person
     * 
     *  @return {String}
     *  last active groups of person
     */
    prototype.getLastActiveAt = function() {
        return this.lastActiveAt;
    };
    /**
     *  Sets the last active group of the Person
     * 
     *  @param {String} lastGroups
     *                  last active groups of the Person
     */
    prototype.setLastActiveAt = function(lastGroups) {
        this.lastActiveAt = lastGroups;
    };
    /**
     *  Returns the communities of the Person
     * 
     *  @return {String}
     *  communities of person
     */
    prototype.getCommunities = function() {
        return this.communities;
    };
    /**
     *  Sets the communities of the Person
     * 
     *  @param {String} communities
     *                  communities of the Person
     */
    prototype.setCommunities = function(communities) {
        this.communities = communities;
    };
    /**
     *  Returns the thumbnail image URL of the Person
     * 
     *  @return {ImageObject}
     *  image url of person
     */
    prototype.getImage = function() {
        return this.image;
    };
    /**
     *  Sets the thumbnail image URL of the Person
     * 
     *  @param {ImageObject} image
     *                       image object of the Person
     */
    prototype.setImage = function(image) {
        this.image = image;
    };
    /**
     *  Returns the person's web page
     * 
     *  @return {String}
     *  web page url of person
     */
    prototype.getWebPage = function() {
        return this.sameAs;
    };
    /**
     *  Sets the web page URL of the Person
     * 
     *  @param {String} page
     *                  web page url of the Person
     */
    prototype.setWebPage = function(page) {
        this.sameAs = page;
    };
    /**
     *  Returns the person object URL
     * 
     *  @return {String}
     *  url of person object
     */
    prototype.getUrl = function() {
        return this.url;
    };
    /**
     *  Sets the person object URL
     * 
     *  @param {String} url
     *                  url of the Person object
     */
    prototype.setUrl = function(url) {
        this.url = url;
    };
    /**
     *  Returns the person's position in URL form
     * 
     *  @return {String}
     *  URL of person's position
     */
    prototype.getPosition = function() {
        return this.additionalType;
    };
    /**
     *  Sets the person's position URL.
     *  Validates url as an actual URL, and if not then looks for it in the positionLabels list. (Actual URLs saved as is)
     * 
     *  @param {String} url
     *                  url of the Person object
     */
    prototype.setPosition = function(url) {
        this.initPositions();
        if (url.indexOf("http") > 0) 
            this.additionalType = url;
         else if (ExtPerson.positionLabelsMap[url] != null) 
            this.additionalType = ExtPerson.positionLabelsMap[url];
         else 
            console.log("error: " + url + " not a supported position");
    };
    /**
     *  Returns position label corresponding to the URL form
     * 
     *  @param url URL of the person's position
     *  @return {String}
     */
    prototype.getPositionLabel = function(url) {
        this.initPositions();
        if (url != null && url.length > 0) {
            if (ExtPerson.positionUrlsMap[url] != null) 
                return ExtPerson.positionUrlsMap[url];
             else 
                return "Position \"" + url + "\" not found.";
        } else 
            return "";
    };
    /**
     *  Returns position URL corresponding to the label form
     * 
     *  @param type type label of the person's position
     *  @return {String}
     */
    prototype.getPositionUrl = function(type) {
        this.initPositions();
        if (type != null && type.length > 0) {
            if (ExtPerson.positionLabelsMap[type] != null) 
                return ExtPerson.positionLabelsMap[type];
             else 
                return "Position \"" + type + "\" not found.";
        } else 
            return "";
    };
    /**
     *  Initializes positions arrays so that it can translate legacy position types to JSONLD format
     */
    prototype.initPositions = function() {
        if (ExtPerson.positionLabelsMap["Administrator"] == null) {
            ExtPerson.positionLabelsMap = {};
            ExtPerson.positionLabelsMap["Administrative assistant"] = "http://schema.eduworks.com/pebleXtension/0.1/positionType/Administrative Assistant";
            ExtPerson.positionLabelsMap["Administrator"] = "http://schema.eduworks.com/pebleXtension/0.1/positionType/Administrator";
            ExtPerson.positionLabelsMap["Area or regional educator"] = "http://schema.eduworks.com/pebleXtension/0.1/positionType/AreaOrRegionalEducator";
            ExtPerson.positionLabelsMap["Communicator"] = "http://schema.eduworks.com/pebleXtension/0.1/positionType/Communicator";
            ExtPerson.positionLabelsMap["County agent/educator"] = "http://schema.eduworks.com/pebleXtension/0.1/positionType/CountyAgentOrEducator";
            ExtPerson.positionLabelsMap["Faculty"] = "http://schema.eduworks.com/pebleXtension/0.1/positionType/Faculty";
            ExtPerson.positionLabelsMap["Information technologist"] = "http://schema.eduworks.com/pebleXtension/0.1/positionType/InformationTechnologist";
            ExtPerson.positionLabelsMap["Other"] = "http://schema.eduworks.com/pebleXtension/0.1/positionType/Other";
            ExtPerson.positionLabelsMap["Professional/staff development"] = "http://schema.eduworks.com/pebleXtension/0.1/positionType/ProfessionalOrStaffDevelopment";
            ExtPerson.positionLabelsMap["Program assistant"] = "http://schema.eduworks.com/pebleXtension/0.1/positionType/ProgramAssistant";
            ExtPerson.positionLabelsMap["Master gardener"] = "http://schema.eduworks.com/pebleXtension/0.1/positionType/MasterGardener";
            ExtPerson.positionLabelsMap["Specialist"] = "http://schema.eduworks.com/pebleXtension/0.1/positionType/Specialist";
            ExtPerson.positionLabelsMap["Volunteer"] = "http://schema.eduworks.com/pebleXtension/0.1/positionType/Volunteer";
        }
        if (ExtPerson.positionUrlsMap["http://schema.eduworks.com/pebleXtension/0.1/positionType/Administrator"] == null) {
            ExtPerson.positionUrlsMap = {};
            ExtPerson.positionUrlsMap["http://schema.eduworks.com/pebleXtension/0.1/positionType/Administrative Assistant"] = "Administrative assistant";
            ExtPerson.positionUrlsMap["http://schema.eduworks.com/pebleXtension/0.1/positionType/Administrator"] = "Administrator";
            ExtPerson.positionUrlsMap["http://schema.eduworks.com/pebleXtension/0.1/positionType/AreaOrRegionalEducator"] = "Area or regional educator";
            ExtPerson.positionUrlsMap["http://schema.eduworks.com/pebleXtension/0.1/positionType/Communicator"] = "Communicator";
            ExtPerson.positionUrlsMap["http://schema.eduworks.com/pebleXtension/0.1/positionType/CountyAgentOrEducator"] = "County agent/educator";
            ExtPerson.positionUrlsMap["http://schema.eduworks.com/pebleXtension/0.1/positionType/Faculty"] = "Faculty";
            ExtPerson.positionUrlsMap["http://schema.eduworks.com/pebleXtension/0.1/positionType/InformationTechnologist"] = "Information technologist";
            ExtPerson.positionUrlsMap["http://schema.eduworks.com/pebleXtension/0.1/positionType/Other"] = "Other";
            ExtPerson.positionUrlsMap["http://schema.eduworks.com/pebleXtension/0.1/positionType/ProfessionalOrStaffDevelopment"] = "Professional/staff development";
            ExtPerson.positionUrlsMap["http://schema.eduworks.com/pebleXtension/0.1/positionType/ProgramAssistant"] = "Program assistant";
            ExtPerson.positionUrlsMap["http://schema.eduworks.com/pebleXtension/0.1/positionType/MasterGardener"] = "Master gardener";
            ExtPerson.positionUrlsMap["http://schema.eduworks.com/pebleXtension/0.1/positionType/Specialist"] = "Specialist";
            ExtPerson.positionUrlsMap["http://schema.eduworks.com/pebleXtension/0.1/positionType/Volunteer"] = "Volunteer";
        }
    };
}, {positionLabelsMap: {name: "Map", arguments: [null, null]}, positionUrlsMap: {name: "Map", arguments: [null, null]}, address: "PostalAddress", spouse: "Person", funder: "Person", colleagues: "Person", memberOf: "Organization", height: "Distance", workLocation: "ContactPoint", netWorth: "PriceSpecification", children: "Person", hasOfferCatalog: "OfferCatalog", deathPlace: "Place", birthPlace: "Place", parents: "Person", alumniOf: "EducationalOrganization", homeLocation: "ContactPoint", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", sibling: "Person", performerIn: "SchemaEvent", siblings: "Person", weight: "QuantitativeValue", contactPoint: "ContactPoint", hasPOS: "Place", parent: "Person", owns: "OwnershipInfo", affiliation: "Organization", sponsor: "Organization", brand: "Organization", nationality: "Country", relatedTo: "Person", follows: "Person", knows: "Person", worksFor: "Organization", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
