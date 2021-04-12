module.exports = class EcCreativeWork extends schema.CreativeWork{
    /**
     *  Retrieves a creative work from it's server asynchronously
     * 
     *  @param {String}            id
     *                             ID of the creative work to retrieve from the server
     *  @param {Callback1<String>} success
     *                             Callback triggered after retrieving the creative work,
     *                             returns the creative work retrieved
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error retrieving creative work
     *  @memberOf EcCreativeWork
     *  @method get
     *  @static
     */
    static get(id, success, failure) {
        EcRepository.getAs(id, new EcCreativeWork(), success, failure);
    };
    /**
     *  Retrieves a creative work from it's server synchronously, the call
     *  blocks until it is successful or an error occurs
     * 
     *  @param {String} id
     *                  ID of the creative work to retrieve
     *  @return EcCreativeWork
     *  The creative work retrieved
     *  @memberOf EcCreativeWork
     *  @method getBlocking
     *  @static
     */
    static getBlocking(id) {
        return EcRepository.getBlockingAs(id, new EcCreativeWork());
    };
    /**
     *  Searches a repository for creative works that match the search query
     * 
     *  @param {EcRepository}                    repo
     *                                           Repository to search using the query
     *  @param {String}                          query
     *                                           Query string to pass to the search web service
     *  @param {Callback1<Array<EcCreativeWork>> success
     *                                           Callback triggered after completing the search, returns the results
     *  @param {Callback1<String>}               failure
     *                                           Callback triggered if error searching
     *  @param {Object}                          paramObj
     *                                           Parameter object for search
     *  @memberOf EcCreativeWork
     *  @method search
     *  @static
     */
    static search(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcCreativeWork();
        }, success, failure, paramObj);
    };
};
