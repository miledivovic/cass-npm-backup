/**
 *  Implementation of a Level object with methods for interacting with CASS
 *  services on a server.
 * 
 *  @author fritz.ray@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  @module org.cassproject
 *  @class EcLevel
 *  @constructor
 *  @extends Level
 */
module.exports = class EcLevel extends Level{
    /**
     *  Retrieves a level from the server specified by its ID
     * 
     *  @param {String}             id
     *                              ID of the level to retrieve
     *  @param {Callback1<EcLevel>} success
     *                              Callback triggered when successfully retrieving the level,
     *                              returns the level
     *  @param {Callback1<String>}  failure
     *                              Callback triggered if error occurs when retrieving the level
     *  @memberOf EcLevel
     *  @method get
     *  @static
     */
    static get(id, success, failure) {
        EcRepository.getAs(id, new EcLevel(), success, failure);
    };
    /**
     *  Retrieves a level from it's server synchronously, the call
     *  blocks until it is successful or an error occurs
     * 
     *  @param {String} id
     *                  ID of the level to retrieve
     *  @return EcLevel
     *  The level retrieved
     *  @memberOf EcLevel
     *  @method getBlocking
     *  @static
     */
    static getBlocking(id) {
        return EcRepository.getBlockingAs(id, new EcLevel());
    };
    /**
     *  Searches for levels with a string query
     * 
     *  @param {EcRepository}              repo
     *                                     Repository to search for levels
     *  @param {String}                    query
     *                                     query string to use in search
     *  @param {Callback1<Array<EcLevel>>} success
     *                                     Callback triggered when searches successfully
     *  @param {Callback1<String>}         failure
     *                                     Callback triggered if an error occurs while searching
     *  @param {Object}                    paramObj
     *                                     Search parameters object to pass in
     *  @memberOf EcLevel
     *  @method search
     *  @static
     */
    static search(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcLevel();
        }, success, failure, paramObj);
    };
    /**
     *  Searches for levels using a competency that the results must be related to
     * 
     *  @param {EcRepository}              repo
     *                                     Repository to search for levels
     *  @param {String}                    competencyId
     *                                     competency ID that the levels are rleated to
     *  @param {Callback1<Array<EcLevel>>} success
     *                                     Callback triggered when searches successfully
     *  @param {Callback1<String>}         failure
     *                                     Callback triggered if an error occurs while searching
     *  @param {Object}                    paramObj
     *                                     Search parameters object to pass in
     *  @memberOf EcLevel
     *  @method searchByCompetency
     *  @static
     */
    static searchByCompetency(repo, competencyId, success, failure, paramObj) {
        if (competencyId == null || competencyId == "") {
            failure("No Competency Specified");
            return;
        }
        var query = "competency:\"" + competencyId + "\" OR competency:\"" + EcRemoteLinkedData.trimVersionFromUrl(competencyId) + "\"";
        EcLevel.search(repo, competencyId, success, failure, paramObj);
    };
    /**
     *  Adds a relationship between this level and a target level to define
     *  how they correspond to one another
     * 
     *  @param {EcLevel} targetLevel
     *                   Target level of the relationship
     *  @param {String}  alignmentType
     *                   Type of relationship
     *  @param {EcPpk}   identity
     *                   Private key that will own the new relationship
     *  @param {String}  server
     *                   URL Prefix of the new relationship ID (Server it will be saved on)
     *  @memberOf EcLevel
     *  @method addRelationship
     */
    addRelationship(targetLevel, alignmentType, identity, serverUrl, success, failure, repo) {
        var a = new EcAlignment();
        a.source = this.id;
        a.target = targetLevel.id;
        a.relationType = alignmentType;
        a.addOwner(identity.toPk());
        if (repo == null || repo.selectedServer.indexOf(serverUrl) != -1) 
            a.generateId(serverUrl);
         else 
            a.generateShortId(serverUrl);
        a.signWith(identity);
        a.save(success, failure, repo);
    };
    /**
     *  Method to set the name of this level
     * 
     *  @param {String} name
     *                  Name to set on the level
     *  @memberOf EcLevel
     *  @method setName
     */
    setName(name) {
        this.name = name;
    };
    /**
     *  Method to set the description of the level
     * 
     *  @param {String} description
     *                  Description to set on the level
     *  @memberOf EcLevel
     *  @method setDescription
     */
    setDescription(description) {
        this.description = description;
    };
    /**
     *  Saves this levels details to the server
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successfully saving the level to the server
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error occurs while saving the level to the server
     *  @memberOf EcLevel
     *  @method save
     */
    save(success, failure, repo) {
        if (this.name == null || this.name == "") {
            var msg = "Level name cannot be empty";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        if (this.competency == null || this.competency == "") {
            var msg = "Level's Competency cannot be empty";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        if (repo == null) 
            EcRepository.save(this, success, failure);
         else 
            repo.saveTo(this, success, failure);
    };
    /**
     *  Deletes the level from it's repository
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered when the level is successfully deleted from the server
     *  @param {Callback1<String>} failure
     *                             Callback triggered if an error occurs while deleting the level
     *  @memberOf EcLevel
     *  @method _delete
     */
    prototype._delete = function(success, failure) {
        EcRepository.DELETE(this, success, failure);
    };
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
