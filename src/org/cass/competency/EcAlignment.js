/**
 *  Implementation of an alignment object with methods for interacting with CASS
 *  services on a server.
 * 
 *  @author fritz.ray@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  <p>
 *  TODO: Test case where an absent relation is in the framework.
 *  @module org.cassproject
 *  @class EcAlignment
 *  @constructor
 *  @extends Relation
 */
module.exports = class EcAlignment extends Relation{
    equals(obj) {
        if ((obj).id == null) 
            return ((obj).source == this.source && (obj).target == this.target && (obj).relationType == this.relationType);
        return this.isId((obj).id);
    };
    /**
     *  Retrieves the alignment specified with the ID from the server
     * 
     *  @param {String}                 id
     *                                  ID of the alignment to retrieve
     *  @param {Callback1<EcAlignment>} success
     *                                  Callback triggered on successfully retrieving the alignment,
     *                                  returns the alignment
     *  @param {Callback1<String>}      [failure]
     *                                  Callback triggered if error while retrieving alignment
     *  @memberOf EcAlignment
     *  @method get
     *  @static
     */
    static get(id, success, failure) {
        EcRepository.getAs(id, new EcAlignment(), success, failure);
    };
    /**
     *  Retrieves an alignment from it's server synchronously, the call
     *  blocks until it is successful or an error occurs
     * 
     *  @param {String} id
     *                  ID of the alignment to retrieve
     *  @return EcAlignment
     *  The alignment retrieved
     *  @memberOf EcAlignment
     *  @method getBlocking
     *  @static
     */
    static getBlocking(id) {
        return EcRepository.getBlockingAs(id, new EcAlignment());
    };
    /**
     *  Searches the repository using the query and optional parameters provided
     * 
     *  @param {EcRepository}                  repo
     *                                         Repository to search using the query provided
     *  @param {String}                        query
     *                                         The query to send to the search
     *  @param {Callback1<Array<EcAlignment>>} success
     *                                         Callback triggered on successful search return
     *  @param {Callback1<String>}             [failure]
     *                                         Callback triggered if error searching
     *  @param {Object}                        [paramObj]
     *                                         Parameters to include in the search
     *  @memberOf EcAlignment
     *  @method search
     *  @static
     */
    static search(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcAlignment();
        }, success, failure, paramObj);
    };
    /**
     *  Searches the repository for alignments with a specific ID in the source field
     * 
     *  @param {EcRepository}                  repo
     *                                         Repository to search for alignments with the source specified
     *  @param {String}                        sourceId
     *                                         ID in the source field of the alignments to find
     *  @param {Callback1<Array<EcAlignment>>} success
     *                                         Callback triggered on successful search return
     *  @param {Callback1<String>}             [failure]
     *                                         Callback triggered if error searching
     *  @param {Object}                        [paramObj]
     *                                         Parameters to include in the search
     *  @memberOf EcAlignment
     *  @method searchBySource
     *  @static
     */
    static searchBySource(repo, sourceId, success, failure, paramObj) {
        var query = "";
        var noVersion = EcRemoteLinkedData.trimVersionFromUrl(sourceId);
        if (noVersion == sourceId) {
            query += "source:\"" + sourceId + "\"";
        } else {
            query += "source:\"" + sourceId + "\" OR source:\"" + noVersion + "\"";
        }
        EcAlignment.search(repo, query, success, failure, paramObj);
    };
    /**
     *  Searches the repository for alignments with one of an array of IDs in the source field
     * 
     *  @param {EcRepository}                  repo
     *                                         Repository to search for alignments with the source specified
     *  @param {String}                        sourceId
     *                                         ID in the source field of the alignments to find
     *  @param {Callback1<Array<EcAlignment>>} success
     *                                         Callback triggered on successful search return
     *  @param {Callback1<String>}             [failure]
     *                                         Callback triggered if error searching
     *  @param {Object}                        [paramObj]
     *                                         Parameters to include in the search
     *  @memberOf EcAlignment
     *  @method searchBySource
     *  @static
     */
    static searchBySources(repo, sourceIds, success, failure, paramObj) {
        var query = "";
        query = "(source:";
        var noVersions = [];
        for (var i = 0; i < sourceIds.length; i++) {
            var sourceId = sourceIds[i];
            if (i != 0) 
                query += " OR ";
            var noVersion = EcRemoteLinkedData.trimVersionFromUrl(sourceId);
            if (noVersion == sourceId) {
                query += "\"" + sourceId + "\"";
            } else {
                query += "\"" + sourceId + "\" OR source:\"" + noVersion + "\"";
            }
            noVersions.push(noVersion);
        }
        query += ")";
        EcAlignment.search(repo, query, success, failure, paramObj);
    };
    /**
     *  Searches the repository for alignments with a specific ID in the target field
     * 
     *  @param {EcRepository}                  repo
     *                                         Repository to search for alignments with the source specified
     *  @param {String}                        competencyId
     *                                         ID in the target field of the alignments to find
     *  @param {Callback1<Array<EcAlignment>>} success
     *                                         Callback triggered on successful search return
     *  @param {Callback1<String>}             [failure]
     *                                         Callback triggered if error searching
     *  @param {Object}                        [paramObj]
     *                                         Parameters to include in the search
     *  @memberOf EcAlignment
     *  @method searchByCompetency
     *  @static
     */
    static searchByCompetency(repo, competencyId, success, failure, paramObj) {
        var query = "";
        var noVersion = EcRemoteLinkedData.trimVersionFromUrl(competencyId);
        if (noVersion == competencyId) {
            query += " AND (source:\"" + competencyId + "\" OR target:\"" + competencyId + "\")";
        } else {
            query += " AND (source:\"" + competencyId + "\" OR source:\"" + noVersion + "\" OR target:\"" + competencyId + "\" OR target:\"" + noVersion + "\")";
        }
        EcAlignment.search(repo, query, success, failure, paramObj);
    };
    /**
     *  Setter for alignment name
     * 
     *  @param {String} name
     *                  name to give this alignment
     *  @memberOf EcAlignment
     *  @method setName
     */
    setName(name) {
        this.name = name;
    };
    /**
     *  Setter for alignment description
     * 
     *  @param {String} description
     *                  description to give this alignment
     *  @memberOf EcAlignment
     *  @method setDescription
     */
    setDescription(description) {
        this.description = description;
    };
    /**
     *  Saves this alignment details on the server corresponding to its ID
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successfully saving the alignment
     *  @param {Callback1<String>} [failure]
     *                             Callback triggered if error while saving alignment
     *  @memberOf EcAlignment
     *  @method save
     */
    save(success, failure, repo) {
        if (this.source == null || this.source == "") {
            var msg = "Source Competency cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        if (this.target == null || this.target == "") {
            var msg = "Target Competency cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        if (this.relationType == null || this.relationType == "") {
            var msg = "Relation Type cannot be missing";
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
     *  Deletes the alignment from the server corresponding to its ID
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successfully deleting the alignment
     *  @param {Callback1<String>} [failure]
     *                             Callback triggered if error while deleting alignment
     *  @memberOf EcAlignment
     *  @method _delete
     */
    prototype._delete = function(success, failure) {
        EcRepository.DELETE(this, success, failure);
    };
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
