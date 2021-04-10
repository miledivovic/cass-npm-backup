module.exports = class EcComment extends Comment{
    /**
     *  Retrieves a comment from it's server asynchronously
     * 
     *  @param {String}            id
     *                             ID of the comment to retrieve from the server
     *  @param {Callback1<String>} success
     *                             Callback triggered after retrieving the comment,
     *                             returns the comment retrieved
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error retrieving comment
     *  @memberOf EcComment
     *  @method get
     *  @static
     */
    static get(id, success, failure) {
        EcRepository.getAs(id, new EcComment(), success, failure);
    };
    /**
     *  Retrieves an comment from it's server synchronously, the call
     *  blocks until it is successful or an error occurs
     * 
     *  @param {String} id
     *                  ID of the comment to retrieve
     *  @return EcComment
     *  The concept retrieved
     *  @memberOf EcComment
     *  @method getBlocking
     *  @static
     */
    static getBlocking(id) {
        return EcRepository.getBlockingAs(id, new EcComment());
    };
    /**
     *  Searches a repository for comments that match the search query
     * 
     *  @param {EcRepository}                repo Repository to search using the query
     *  @param {String}                      query Query string to pass to the search web service
     *  @param {Callback1<Array<EcComment>>  success Callback triggered after
     *                                       completing the search, returns the results
     *  @param {Callback1<String>}           failure Callback triggered if error searching
     *  @param {Object}                      paramObj Parameter object for search
     *  @memberOf EcComment
     *  @method search
     *  @static
     */
    static search(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcComment();
        }, success, failure, paramObj);
    };
    /**
     *  Sets the comment's subject as follows:
     *   Comment.isBasedOn: framework.shortId to provide a framework context to the comment
     *   Comment.about: aboutObj.shortId to provide an about/subject to the comment
     * 
     *  @param {EcFramework}         framework Framework which contains the id to set to the comment's isBasedOn
     *  @param {EcRemoteLinkedData}  aboutObj Object which contains the id to set to the comment's about
     *  @method setSubject
     */
    setSubject(framework, aboutObj) {
        if (framework != null) {
            (this)["isBasedOn"] = framework.shortId();
        }
        if (aboutObj != null) {
            (this)["about"] = aboutObj.shortId();
        }
    };
    /**
     *  Sets the comment's subject as follows:
     *   Comment.isBasedOn: frameworkId to provide a framework context to the comment
     *   Comment.about: aboutId to provide an about/subject to the comment
     * 
     *  @param {String}  frameworkId Framework ID to set to the comment's isBasedOn
     *  @param {String}  aboutId Object ID to set to the comment's about
     *  @method setSubjectIds
     */
    setSubjectIds(frameworkId, aboutId) {
        if (frameworkId != null) {
            (this)["isBasedOn"] = frameworkId;
        }
        if (aboutId != null) {
            (this)["about"] = aboutId;
        }
    };
    /**
     *  Sets the comment's creator to the ID of the given person object
     *  @param {EcPerson}  person Person which contains the id to set to the comment's creator
     *  @method setCreator
     */
    setCreator(creatorObj) {
        if (creatorObj != null) {
            (this)["creator"] = creatorObj.shortId();
        }
    };
    /**
     *  Sets the comment's creator to the given person ID
     *  @param {String}  creatorId ID of the person to set to the comment's creator
     *  @method setCreatorId
     */
    setCreatorId(creatorId) {
        if (creatorId != null) {
            (this)["creator"] = creatorId;
        }
    };
    /**
     *  Sets the comment's dateCreated to the given time in milliseconds
     *  @param {String}  longDateString The time in milliseconds to set to the comment's dateCreated
     *  @method setDateCreated
     */
    setDateCreated(longDateString) {
        if (longDateString != null) {
            (this)["dateCreated"] = longDateString;
        }
    };
}, {parentItem: "Question", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
