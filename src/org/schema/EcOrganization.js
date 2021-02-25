var EcOrganization = function() {
    Organization.call(this);
};
EcOrganization = stjs.extend(EcOrganization, Organization, [], function(constructor, prototype) {
    constructor.ORG_PPK_SET_KEY = "https://schema.cassproject.org/0.3/ppkSet";
    /**
     *  Retrieves an organization from it's server asynchronously
     * 
     *  @param {String}            id
     *                             ID of the concept to retrieve from the server
     *  @param {Callback1<String>} success
     *                             Callback triggered after retrieving the organization,
     *                             returns the organization retrieved
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error retrieving organization
     *  @memberOf EcOrganization
     *  @method get
     *  @static
     */
    constructor.get = function(id, success, failure) {
        EcRepository.getAs(id, new EcOrganization(), success, failure);
    };
    /**
     *  Retrieves an organization from it's server synchronously, the call
     *  blocks until it is successful or an error occurs
     * 
     *  @param {String} id
     *                  ID of the organization to retrieve
     *  @return EcOrganization
     *  The concept retrieved
     *  @memberOf EcOrganization
     *  @method getBlocking
     *  @static
     */
    constructor.getBlocking = function(id) {
        return EcRepository.getBlockingAs(id, new EcOrganization());
    };
    /**
     *  Searches a repository for organizations that match the search query
     * 
     *  @param {EcRepository}                    repo Repository to search using the query
     *  @param {String}                          query Query string to pass to the search web service
     *  @param {Callback1<Array<EcOrganization>> success Callback triggered after
     *                                           completing the search, returns the results
     *  @param {Callback1<String>}               failure Callback triggered if error searching
     *  @param {Object}                          paramObj Parameter object for search
     *  @memberOf EcOrganization
     *  @method search
     *  @static
     */
    constructor.search = function(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcOrganization();
        }, success, failure, paramObj);
    };
    /**
     *  Adds the given person's id to the employee list
     * 
     *  @param {EcPerson}          person Person to add to the Organization's employee list
     *  @method addEmployee
     */
    prototype.addEmployee = function(person) {
        if (this.employee == null) 
            (this)["employee"] = new Array();
        if (!EcArray.isArray(this.employee)) 
             throw new RuntimeException("Employee is not Array");
        var ary = this.employee;
        var psid = person.shortId();
        for (var i = 0; i < ary.length; i++) {
            if (ary[i] == psid) 
                return;
        }
        ary.push(psid);
    };
    /**
     *  Removes the person id from the employee list
     * 
     *  @param {String}          id Person id to be removed from Organization's employee list
     *  @method removeEmployeeById
     */
    prototype.removeEmployeeById = function(id) {
        if (this.employee == null) 
            return;
        if (!EcArray.isArray(this.employee)) 
             throw new RuntimeException("Employee is not Array");
        var ary = this.employee;
        for (var i = 0; i < ary.length; i++) {
            if (EcRemoteLinkedData.trimVersionFromUrl(ary[i]) == EcRemoteLinkedData.trimVersionFromUrl(id)) {
                ary.splice(i, 1);
            }
        }
    };
    /**
     *  Moves all Person type Member to Employee
     * 
     *  @method movePersonMembersToEmployee
     */
    prototype.movePersonMembersToEmployee = function() {
        if (this.member == null) 
            return;
        if (this.employee == null) 
            (this)["employee"] = new Array();
        if (!EcArray.isArray(this.employee) || !EcArray.isArray(this.member)) 
            return;
        var membAry = this.member;
        var empAry = this.employee;
        var me = (this);
        for (var i = 0; i < membAry.length; i++) {
            var id = membAry[i];
            if (id.toLowerCase().indexOf("person") > -1) {
                if (empAry.indexOf(id) <= -1) {
                    empAry.push(id);
                }
                membAry.splice(i, 1);
            }
        }
    };
    /**
     *  Adds the given person's id to the employee list
     * 
     *  @param {Array<EcPpk>} ppkList Person to add to the Organization's employee list
     * 
     *  @return String
     *  A JSON array string containing the PEMs of the given PPKs
     * 
     *  @method ppkListToPemArrayString
     */
    prototype.ppkListToPemArrayString = function(ppkList) {
        if (ppkList == null) 
            return JSON.stringify(new Array());
         else {
            var pemArray = new Array();
            for (var i = 0; i < ppkList.length; i++) {
                pemArray.push(ppkList[i].toPem());
            }
            return JSON.stringify(pemArray);
        }
    };
    /**
     *  Add's a key to the organization
     * 
     *  @param {EcPpk}   newOrgPpk The key to add to the organization
     *  @memberOf EcOrganization
     *  @method addOrgKey
     */
    prototype.addOrgKey = function(newOrgPpk) {
        var orgKeys = this.getOrgKeys();
        orgKeys.push(newOrgPpk);
        var newKeys = EcEncryptedValue.encryptValue(this.ppkListToPemArrayString(orgKeys), EcOrganization.ORG_PPK_SET_KEY, this.owner, this.reader);
        (this)[EcOrganization.ORG_PPK_SET_KEY] = newKeys;
    };
    /**
     *  Performs a rekey operation and saves the organization details to the server
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successfully saving the competency
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error saving competency
     *  @memberOf EcOrganization
     *  @method rekeyAndSave
     */
    prototype.rekeyAndSave = function(success, failure, repo) {
        if (repo == null) {
            var msg = "Repository cannot be null for a rekey operation";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        } else {
            var oldKey = this.getCurrentOrgKey();
            var newKey = EcPpk.generateKey();
            var identity = new EcIdentity();
            identity.ppk = newKey;
            identity.displayName = "Organization Rekey New Key";
            EcIdentityManager.addIdentity(identity);
            var rekeyRequest = EcRekeyRequest.generateRekeyRequest(repo.selectedServer, oldKey, newKey);
            this.addOrgKey(newKey);
            var newKeys = EcEncryptedValue.encryptValue(this.ppkListToPemArrayString(this.getOrgKeys()), EcOrganization.ORG_PPK_SET_KEY, this.owner, this.reader);
            (this)[EcOrganization.ORG_PPK_SET_KEY] = newKeys;
            repo.saveTo(this, function(res) {
                repo.saveTo(rekeyRequest, success, failure);
            }, failure);
        }
    };
    /**
     *  Encrypts the org keys and saves the organization details to the server
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successfully saving the competency
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error saving competency
     *  @memberOf EcOrganization
     *  @method save
     */
    prototype.save = function(success, failure, repo) {
        var newKeys = EcEncryptedValue.encryptValue(this.ppkListToPemArrayString(this.getOrgKeys()), EcOrganization.ORG_PPK_SET_KEY, this.owner, this.reader);
        (this)[EcOrganization.ORG_PPK_SET_KEY] = newKeys;
        if (repo == null) 
            EcRepository.save(this, success, failure);
         else 
            repo.saveTo(this, success, failure);
    };
    /**
     *  Returns the current organization key
     * 
     *  @return EcPpk
     *  The current organization key
     *  @memberOf EcOrganization
     *  @method getCurrentOrgKey
     */
    prototype.getCurrentOrgKey = function() {
        var orgKeys = this.getOrgKeys();
        if (orgKeys.length >= 1) {
            return orgKeys[orgKeys.length - 1];
        } else 
            return null;
    };
    /**
     *  Returns the list of organization keys
     * 
     *  @return Array<EcPpk>
     *  The Array of organization keys
     *  @memberOf EcOrganization
     *  @method getOrgKeys
     */
    prototype.getOrgKeys = function() {
        var orgKeys = new Array();
        var o = (this)[EcOrganization.ORG_PPK_SET_KEY];
        if (o != null) {
            var ev = new EcEncryptedValue();
            ev.copyFrom(o);
            var orgKeysPPKPems = JSON.parse(ev.decryptIntoString());
            for (var i = 0; i < orgKeysPPKPems.length; i++) {
                orgKeys.push(EcPpk.fromPem(orgKeysPPKPems[i]));
            }
        }
        return orgKeys;
    };
    /**
     *  Moves old key field to new key field array
     * 
     *  @method moveKeyField
     */
    prototype.moveKeyField = function() {
        var o = (this)["https://schema.cassproject.org/0.3/ppk"];
        if (o != null) {
            var ev = new EcEncryptedValue();
            ev.copyFrom(o);
            var currentGroupPpkPem = ev.decryptIntoString();
            var keyArray = new Array();
            keyArray.push(currentGroupPpkPem);
            var newKey = EcEncryptedValue.encryptValue(JSON.stringify(keyArray), EcOrganization.ORG_PPK_SET_KEY, this.owner, this.reader);
            (this)[EcOrganization.ORG_PPK_SET_KEY] = newKey;
            delete (this)["https://schema.cassproject.org/0.3/ppk"];
        }
    };
    prototype.upgrade = function() {
        EcRemoteLinkedData.prototype.upgrade.call(this);
        this.movePersonMembersToEmployee();
        this.moveKeyField();
    };
    /**
     *  Attempts to find and return the organization's fingerprint from the id.
     * 
     *  @return {String}
     *  @method getFingerprintFromId
     */
    prototype.getFingerprintFromId = function() {
        return this.getGuid();
    };
    /**
     *  Attempts to find and return the organization's fingerprint from the id.
     * 
     *  @return {String}
     *  @method getFingerprintFromId
     */
    prototype.getFingerprint = function() {
        return this.getGuid();
    };
}, {serviceArea: "GeoShape", address: "PostalAddress", funder: "Person", memberOf: "Organization", subOrganization: "Organization", hasOfferCatalog: "OfferCatalog", reviews: "Review", members: "Organization", aggregateRating: "AggregateRating", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", member: "Organization", founders: "Person", alumni: "Person", events: "SchemaEvent", logo: "ImageObject", employees: "Person", department: "Organization", contactPoint: "ContactPoint", parentOrganization: "Organization", employee: "Person", numberOfEmployees: "QuantitativeValue", hasPOS: "Place", review: "Review", foundingLocation: "Place", owns: "OwnershipInfo", event: "SchemaEvent", founder: "Person", sponsor: "Organization", location: "PostalAddress", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
