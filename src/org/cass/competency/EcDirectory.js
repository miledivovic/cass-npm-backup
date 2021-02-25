/**
 *  Implementation of a Directory object with methods for interacting with CASS
 *  services on a server.
 * 
 *  @author kristin.wood@eduworks.com
 *  @module org.cassproject
 *  @class EcDirectory
 *  @constructor
 *  @extends Directory
 */
var EcDirectory = function() {
    Directory.call(this);
    var me = (this);
    if (EcDirectory.template != null) {
        var you = (EcDirectory.template);
        for (var key in you) {
            if ((typeof you[key]) != "function") 
                me[key.replace("@", "")] = you[key];
        }
    }
};
EcDirectory = stjs.extend(EcDirectory, Directory, [], function(constructor, prototype) {
    constructor.template = null;
    prototype.equals = function(obj) {
        return this.isId((obj).id);
    };
    /**
     *  Retrieves a directory from the server, specified by the ID
     * 
     *  @param {String}                 id
     *                                  ID of the directory to retrieve
     *  @param {Callback1<EcDirectory>} success
     *                                  Callback triggered after successfully retrieving the directory,
     *                                  returns the retrieved directory
     *  @param {Callback1<String>}      failure
     *                                  Callback triggered if an error occurs while retrieving the directory
     *  @memberOf EcDirectory
     *  @method get
     *  @static
     */
    constructor.get = function(id, success, failure) {
        EcRepository.getAs(id, new EcDirectory(), success, failure);
    };
    /**
     *  Retrieves a directory from the server in a blocking fashion, specified by the ID
     * 
     *  @param {String}                 id
     *                                  ID of the directory to retrieve
     *  @param {Callback1<EcDirectory>} success
     *                                  Callback triggered after successfully retrieving the directory,
     *                                  returns the retrieved directory
     *  @param {Callback1<String>}      failure
     *                                  Callback triggered if an error occurs while retrieving the directory
     *  @memberOf EcDirectory
     *  @method getBlocking
     *  @static
     */
    constructor.getBlocking = function(id) {
        return EcRepository.getBlockingAs(id, new EcDirectory());
    };
    /**
     *  Searches the repository given for directories using the query passed in
     * 
     *  @param {EcRepository}                 repo
     *                                        Repository to search for directories
     *  @param {String}                       query
     *                                        Query string used to search for a directory
     *  @param {Callback1<Array<EcDirectory>} success
     *                                        Callback triggered when the search successfully returns,
     *                                        returns search results
     *  @param {Callback1<String>}            failure
     *                                        Callback triggered if an error occurs while searching
     *  @param {Object}                       paramObj
     *                                        Parameter object for search
     *  @memberOf EcDirectory
     *  @method search
     *  @static
     */
    constructor.search = function(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcDirectory();
        }, success, failure, paramObj);
    };
    /**
     *  Saves this directory's details on the server specified by its ID or repo
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered after successfully saving the directory
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error occurs while saving the directory
     *  @param {EcRepository}      repo
     *                             Repository to save the item to
     *  @memberOf EcDirectory
     *  @method save
     */
    prototype.save = function(success, failure, repo) {
        if (this.name == null || this.name == "") {
            var msg = "Directory Name Cannot be Empty";
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
     *  Deletes this directory from the server specified by its ID
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered if successfully deleted directory
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error occurs when deleting the directory
     *  @memberOf EcDirectory
     *  @method _delete
     */
    prototype._delete = function(success, failure) {
        EcRepository.DELETE(this, success, failure);
    };
}, {template: "Object", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
