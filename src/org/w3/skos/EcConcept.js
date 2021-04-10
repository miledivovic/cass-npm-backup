/**
 *  Created by fray on 11/29/17.
 */
var EcConcept = function() {
    Concept.call(this);
    var me = (this);
    if (EcConcept.template != null) {
        var you = (EcConcept.template);
        for (var key in you) {
            if ((typeof you[key]) != "function") 
                me[key.replace("@", "")] = you[key];
        }
    }
};
EcConcept = stjs.extend(EcConcept, Concept, [], function(constructor, prototype) {
    static template = null;
    /**
     *  Retrieves a concept from it's server asynchronously
     * 
     *  @param {String}            id
     *                             ID of the concept to retrieve from the server
     *  @param {Callback1<String>} success
     *                             Callback triggered after retrieving the concept,
     *                             returns the concept retrieved
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error retrieving concept
     *  @memberOf EcConcept
     *  @method get
     *  @static
     */
    static get(id, success, failure) {
        EcRepository.getAs(id, new EcConcept(), success, failure);
    };
    /**
     *  Retrieves a concept from it's server synchronously, the call
     *  blocks until it is successful or an error occurs
     * 
     *  @param {String} id
     *                  ID of the concept to retrieve
     *  @return EcConcept
     *  The concept retrieved
     *  @memberOf EcConcept
     *  @method getBlocking
     *  @static
     */
    static getBlocking(id) {
        return EcRepository.getBlockingAs(id, new EcConcept());
    };
    /**
     *  Searches a repository for competencies that match the search query
     * 
     *  @param {EcRepository}                  repo
     *                                         Repository to search using the query
     *  @param {String}                        query
     *                                         Query string to pass to the search web service
     *  @param {Callback1<Array<EcConcept>> success
     *                                         Callback triggered after completing the search, returns the results
     *  @param {Callback1<String>}             failure
     *                                         Callback triggered if error searching
     *  @param {Object}                        paramObj
     *                                         Parameter object for search
     *  @memberOf EcConcept
     *  @method search
     *  @static
     */
    static search(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcConcept();
        }, success, failure, paramObj);
    };
}, {template: "Object", topConceptOf: "ConceptScheme", semanticRelation: "Concept", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
