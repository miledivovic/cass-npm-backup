var EcPerson = function() {
    Person.call(this);
};
EcPerson = stjs.extend(EcPerson, Person, [], function(constructor, prototype) {
    constructor.getByPk = function(repo, pk, success, failure) {
        EcPerson.get(repo.selectedServer + (repo.selectedServer.endsWith("/") ? "" : "/") + "data/" + pk.fingerprint(), success, failure);
    };
    constructor.getByPkBlocking = function(repo, pk) {
        return EcPerson.getBlocking(repo.selectedServer + (repo.selectedServer.endsWith("/") ? "" : "/") + "data/" + pk.fingerprint());
    };
    prototype.equals = function(obj) {
        return this.isId((obj).id);
    };
    /**
     *  Retrieves a person from it's server asynchronously
     * 
     *  @param {String}            id
     *                             ID of the competency to retrieve from the server
     *  @param {Callback1<String>} success
     *                             Callback triggered after retrieving the person,
     *                             returns the person retrieved
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error retrieving person
     *  @memberOf EcPerson
     *  @method get
     *  @static
     */
    constructor.get = function(id, success, failure) {
        EcRepository.getAs(id, new EcPerson(), success, failure);
    };
    /**
     *  Retrieves a person from it's server synchronously, the call
     *  blocks until it is successful or an error occurs
     * 
     *  @param {String} id
     *                  ID of the person to retrieve
     *  @return EcPerson
     *  The person retrieved
     *  @memberOf EcPerson
     *  @method getBlocking
     *  @static
     */
    constructor.getBlocking = function(id) {
        return EcRepository.getBlockingAs(id, new EcPerson());
    };
    /**
     *  Searches a repository for persons that match the search query
     * 
     *  @param {EcRepository}          repo Repository to search using the query
     *  @param {String}                query Query string to pass to the search web service
     *  @param {Callback1<Array<Quiz>> success Callback triggered after
     *                                 completing the search, returns the results
     *  @param {Callback1<String>}     failure Callback triggered if error searching
     *  @param {Object}                paramObj Parameter object for search
     *  @memberOf EcPerson
     *  @method search
     *  @static
     */
    constructor.search = function(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcPerson();
        }, success, failure, paramObj);
    };
    /**
     *  Attempts to find and return the person's fingerprint from the id.
     * 
     *  @return {String}
     *  @method getFingerprintFromId
     */
    prototype.getFingerprintFromId = function() {
        return this.getGuid();
    };
    /**
     *  Attempts to find and return the person's fingerprint from the id.
     * 
     *  @return {String}
     *  @method getFingerprintFromId
     */
    prototype.getFingerprint = function() {
        return this.getGuid();
    };
}, {address: "PostalAddress", spouse: "Person", funder: "Person", colleagues: "Person", memberOf: "Organization", height: "Distance", workLocation: "ContactPoint", netWorth: "PriceSpecification", children: "Person", hasOfferCatalog: "OfferCatalog", deathPlace: "Place", birthPlace: "Place", parents: "Person", alumniOf: "EducationalOrganization", homeLocation: "ContactPoint", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", sibling: "Person", performerIn: "SchemaEvent", siblings: "Person", weight: "QuantitativeValue", contactPoint: "ContactPoint", hasPOS: "Place", parent: "Person", owns: "OwnershipInfo", affiliation: "Organization", sponsor: "Organization", brand: "Organization", nationality: "Country", relatedTo: "Person", follows: "Person", knows: "Person", worksFor: "Organization", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
