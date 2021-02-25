/**
 *  @author debbie.brown@eduworks.com
 */
var ExtInstitution = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Organization.call(this);
    this.context = "http://schema.eduworks.com/pebleXtension/0.1/";
    this.type = "Institution";
};
ExtInstitution = stjs.extend(ExtInstitution, Organization, [], function(constructor, prototype) {
    constructor.EMPLOYEE_TYPE_ADMINISTRATOR = "administrator";
    constructor.EMPLOYEE_TYPE_ASSISTANT = "assistant";
    constructor.EMPLOYEE_TYPE_IT = "IT";
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
    prototype.legacyId = null;
    prototype.locationState = null;
    prototype.memberCount = null;
    prototype.communityLink = null;
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
    constructor.get = function(id, success, failure) {
        EcRepository.get(id, function(p1) {
            if (stjs.isInstanceOf(p1.constructor, ExtInstitution)) 
                if (success != null) {
                    success(p1);
                    return;
                }
            var institution = new ExtInstitution();
            if (p1.isA(EcEncryptedValue.myType)) {
                var encrypted = new EcEncryptedValue();
                encrypted.copyFrom(p1);
                p1 = encrypted.decryptIntoObject();
            }
            if (p1.isAny(institution.getTypes())) {
                institution.copyFrom(p1);
                if (EcRepository.caching) {
                    (EcRepository.cache)[institution.shortId()] = institution;
                    (EcRepository.cache)[institution.id] = institution;
                }
                if (success != null) 
                    success(institution);
            } else {
                var msg = "Resultant object is not a institution.";
                if (failure != null) 
                    failure(msg);
                 else 
                    console.error(msg);
            }
        }, failure);
    };
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
    constructor.getBlocking = function(id) {
        var p1 = EcRepository.getBlocking(id);
        if (stjs.isInstanceOf(p1.constructor, ExtInstitution)) 
            return p1;
        var institution = new ExtInstitution();
        if (p1.isA(EcEncryptedValue.myType)) {
            var encrypted = new EcEncryptedValue();
            encrypted.copyFrom(p1);
            p1 = encrypted.decryptIntoObject();
            EcEncryptedValue.encryptOnSave(p1.id, true);
        }
        if (p1.isAny(institution.getTypes())) {
            institution.copyFrom(p1);
            if (EcRepository.caching) {
                (EcRepository.cache)[institution.shortId()] = institution;
                (EcRepository.cache)[institution.id] = institution;
            }
            return institution;
        } else {
            var msg = "Retrieved object was not a institution";
            console.error(msg);
            return null;
        }
    };
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
    constructor.search = function(repo, query, success, failure, paramObj) {
        var queryAdd = new ExtInstitution().getSearchStringByType();
        if (query == null || query == "") 
            query = queryAdd;
         else 
            query = "(" + query + ") AND " + queryAdd;
        repo.searchWithParams(query, paramObj, null, function(p1) {
            if (success != null) {
                var ret = [];
                p1.forEach(function(rld) {
                    var content = new ExtInstitution();
                    content.copyFrom(rld);
                    ret.push(content);
                });
                success(ret);
            }
        }, failure);
    };
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
    prototype.save = function(success, failure) {
        if (this.getId() == null || this.getId() == "") {
            var msg = "ID cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        if (this.getName() == null || this.getName() == "") {
            var msg = "Name cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        if (this.getWebPage() == null || this.getWebPage() == "") {
            var msg = "Official web page cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        EcRepository.save(this, success, failure);
        return "Institution " + this.getId() + " saved.";
    };
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
    prototype._delete = function(success, failure) {
        EcRepository.DELETE(this, success, failure);
    };
    /**
     *  Returns the ID of the Institution
     * 
     *  @return {String}
     *  ID of institution
     */
    prototype.getId = function() {
        return this.id;
    };
    /**
     *  Sets the ID of the Institution
     * 
     *  @param {String} id
     *                  ID of the Institution
     */
    prototype.setId = function(id) {
        this.id = id;
    };
    /**
     *  Returns the legacyId of the Institution
     * 
     *  @return {String}
     *  legacyId of institution
     */
    prototype.getLegacyId = function() {
        return this.legacyId;
    };
    /**
     *  Sets the legacyId of the Institution
     * 
     *  @param {String} id
     *                  legacyId of the Institution
     */
    prototype.setLegacyId = function(id) {
        this.legacyId = id;
    };
    /**
     *  Returns the name of the Institution
     * 
     *  @return {String}
     *  name of institution
     */
    prototype.getName = function() {
        return this.name;
    };
    /**
     *  Sets the first name of the Institution
     * 
     *  @param {String} name
     *                  first name of the Institution
     */
    prototype.setName = function(name) {
        this.name = name;
    };
    /**
     *  Returns the alternate name of the Institution
     * 
     *  @return {String}
     *  alternate name of institution
     */
    prototype.getAlternateName = function() {
        return this.alternateName;
    };
    /**
     *  Sets the alternate name of the Institution
     * 
     *  @param {String} name
     *                  alternate name of the Institution
     */
    prototype.setAlternateName = function(name) {
        this.alternateName = name;
    };
    /**
     *  Returns the telephone of the Institution
     * 
     *  @return {String}
     *  telephone of institution
     */
    prototype.getPhone = function() {
        return this.telephone;
    };
    /**
     *  Sets the telephone number of the Institution
     * 
     *  @param {String} phone
     *                  telephone of the Institution
     */
    prototype.setPhone = function(phone) {
        this.telephone = phone;
    };
    /**
     *  Returns the fax of the Institution
     * 
     *  @return {String}
     *  fax of institution
     */
    prototype.getFax = function() {
        return this.faxNumber;
    };
    /**
     *  Sets the fax number of the Institution
     * 
     *  @param {String} fax
     *                  fax of the Institution
     */
    prototype.setFax = function(fax) {
        this.faxNumber = fax;
    };
    /**
     *  Returns the description of the Institution
     * 
     *  @return {String}
     *  description of institution
     */
    prototype.getDescription = function() {
        return this.description;
    };
    /**
     *  Sets the description of the Institution
     * 
     *  @param {String} desc
     *                  description of the Institution
     */
    prototype.setDescription = function(desc) {
        this.description = desc;
    };
    /**
     *  Returns the institution's web page
     * 
     *  @return {String}
     *  web page url of institution
     */
    prototype.getWebPage = function() {
        return this.sameAs;
    };
    /**
     *  Sets the web page URL of the Institution
     * 
     *  @param {String} page
     *                  web page url of the Institution
     */
    prototype.setWebPage = function(page) {
        this.sameAs = page;
    };
    /**
     *  Returns the institution's people community link
     * 
     *  @return {String}
     *  people community link of institution
     */
    prototype.getCommunityLink = function() {
        return this.communityLink;
    };
    /**
     *  Sets the people community link of the Institution
     * 
     *  @param {String} page
     *                  people community link of the Institution
     */
    prototype.setCommunityLink = function(page) {
        this.communityLink = page;
    };
    /**
     *  Returns the institution object URL
     * 
     *  @return {String}
     *  url of institution object
     */
    prototype.getUrl = function() {
        return this.url;
    };
    /**
     *  Sets the institution object URL
     * 
     *  @param {String} url
     *                  url of the Institution object
     */
    prototype.setUrl = function(url) {
        this.url = url;
    };
    /**
     *  Returns the institution's location state
     * 
     *  @return {String}
     *  location state of institution
     */
    prototype.getLocationState = function() {
        return this.locationState;
    };
    /**
     *  Sets the location state of the Institution
     * 
     *  @param {String} state
     *                  location state of the Institution
     */
    prototype.setLocationState = function(state) {
        this.locationState = state;
    };
    /**
     *  Returns the thumbnail image URL of the institution
     * 
     *  @return {ImageObject}
     *  image url of institution
     */
    prototype.getImage = function() {
        return this.logo;
    };
    /**
     *  Sets the thumbnail image URL of the institution
     * 
     *  @param {ImageObject} image
     *                       image object of the institution
     */
    prototype.setImage = function(image) {
        this.logo = image;
    };
    /**
     *  Returns the institution's region
     * 
     *  @return {String}
     *  region of institution
     */
    prototype.getRegion = function() {
        return this.areaServed.toString();
    };
    /**
     *  Sets the region of the Institution
     * 
     *  @param {String} region
     *                  region of the Institution
     */
    prototype.setRegion = function(region) {
        this.areaServed = region;
    };
    /**
     *  Returns the institution's number of members
     * 
     *  @return {}
     *  number of members at institution
     */
    prototype.getMemberCount = function() {
        return this.memberCount;
    };
    /**
     *  Sets the member count for the Institution
     * 
     *  @param {String} count
     *                  member count at the Institution
     */
    prototype.setMemberCount = function(count) {
        this.memberCount = count;
    };
    /**
     *  Returns the assistant POC of the Institution
     * 
     *  @return {Person}
     *  assistant poc of institution
     */
    prototype.getAssistantPOC = function() {
        return this.employee;
    };
    /**
     *  Sets assistant POC for the Institution
     * 
     *  @param {Person} poc
     *                  assistant POC at the Institution
     */
    prototype.setAssistantPOC = function(poc) {
        this.employee = poc;
    };
    /**
     *  Returns the administrative POC of the Institution
     * 
     *  @return {Organization}
     *  administrative poc of institution
     */
    prototype.getAdminPOC = function() {
        return this.member;
    };
    /**
     *  Sets administrative POC for the Institution
     * 
     *  @param {Organization} poc
     *                  administrativePOC at the Institution
     */
    prototype.setAdminPOC = function(poc) {
        this.member = poc;
    };
    /**
     *  Returns the IT POC of the Institution
     * 
     *  @return {ContactPoint}
     *  IT poc of institution
     */
    prototype.getITPOC = function() {
        return this.contactPoint;
    };
    /**
     *  Sets IT POC for the Institution
     * 
     *  @param {ContactPoint} poc
     *                        IT POC at the Institution
     */
    prototype.setITPOC = function(poc) {
        this.contactPoint = poc;
    };
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
    prototype.addPOC = function(type, name, title, email, phone, fax, addr1, addr2, addr3, addrCityState, addrZip) {
        var addr = new PostalAddress();
        if (addr1 != null && addr1 != "" && addr2 != null && addr2 != "" && addr3 != null && addr3 != "") {
            addr.name = addr1.trim();
            addr.streetAddress = addr2.trim() + ", " + addr3.trim();
        } else if (addr1 != null && addr1 != "" && addr2 != null && addr2 != "") {
            addr.streetAddress = addr1.trim() + ", " + addr2.trim();
        } else if (addr1 != null && addr1 != "") {
            addr.streetAddress = addr1.trim();
        }
        if (addrCityState != null && addrCityState != "") {
            addr.addressLocality = addrCityState.substring(0, addrCityState.indexOf(",")).trim();
            addr.addressRegion = addrCityState.substring(addrCityState.indexOf(",") + 1).trim();
        }
        if (addrZip != null && addrZip != "") 
            addr.postalCode = addrZip.trim();
        if (type.equals(ExtInstitution.EMPLOYEE_TYPE_ADMINISTRATOR) || type.equals(ExtInstitution.EMPLOYEE_TYPE_ASSISTANT)) {
            var poc = new Person();
            if (name != null && name != "") 
                poc.name = name.trim();
            if (title != null && title != "") 
                poc.jobTitle = title.trim();
            if (phone != null && phone != "") 
                poc.telephone = phone.trim();
            if (fax != null && fax != "") 
                poc.faxNumber = fax.trim();
            if (email != null && email != "") 
                poc.email = email.trim();
            if ((addr1 != null && addr1 != "") || (addr2 != null && addr2 != "") || (addr3 != null && addr3 != "") || (addrCityState != null && addrCityState != "") || (addrZip != null && addrZip != "")) 
                poc.address = addr;
            if (type.equals(ExtInstitution.EMPLOYEE_TYPE_ADMINISTRATOR)) {
                var o = new Organization();
                o.employee = poc;
                this.setAdminPOC(o);
            } else if (type.equals(ExtInstitution.EMPLOYEE_TYPE_ASSISTANT)) 
                this.setAssistantPOC(poc);
        } else if (type.equals(ExtInstitution.EMPLOYEE_TYPE_IT)) {
            var poc = new ContactPoint();
            if (name != null && name != "") 
                poc.name = name.trim();
            if (title != null && title != "") 
                poc.contactType = title.trim();
            if (phone != null && phone != "") 
                poc.telephone = phone.trim();
            if (fax != null && fax != "") 
                poc.faxNumber = fax.trim();
            if (email != null && email != "") 
                poc.email = email.trim();
            if ((addr1 != null && addr1 != "") && (addr2 != null && addr2 != "")) 
                poc.sameAs = addr1.trim() + ", " + addr2;
             else if (addr1 != null && addr1 != "") 
                poc.sameAs = addr1.trim();
             else if (addr2 != null && addr2 != "") 
                poc.sameAs = addr2.trim();
            this.setITPOC(poc);
        }
    };
}, {serviceArea: "GeoShape", address: "PostalAddress", funder: "Person", memberOf: "Organization", subOrganization: "Organization", hasOfferCatalog: "OfferCatalog", reviews: "Review", members: "Organization", aggregateRating: "AggregateRating", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", member: "Organization", founders: "Person", alumni: "Person", events: "SchemaEvent", logo: "ImageObject", employees: "Person", department: "Organization", contactPoint: "ContactPoint", parentOrganization: "Organization", employee: "Person", numberOfEmployees: "QuantitativeValue", hasPOS: "Place", review: "Review", foundingLocation: "Place", owns: "OwnershipInfo", event: "SchemaEvent", founder: "Person", sponsor: "Organization", location: "PostalAddress", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
