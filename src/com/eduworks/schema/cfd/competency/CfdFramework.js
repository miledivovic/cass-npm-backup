module.exports = class CfdFramework extends EcFramework{
    static toRemove = null;
    static removed = null;
    /**
     *  Retrieves a framework from the server, specified by the ID
     * 
     *  @param {String}                 id
     *                                  ID of the framework to retrieve
     *  @param {Callback1<EcFramework>} success
     *                                  Callback triggered after successfully retrieving the framework,
     *                                  returns the retrieved framework
     *  @param {Callback1<String>}      failure
     *                                  Callback triggered if an error occurs while retrieving the framework
     *  @memberOf CfdFramework
     *  @method get
     *  @static
     */
    static cfdGet(id, success, failure) {
        return EcRepository.getAs(id, new CfdFramework(), success, failure);
    };
    /**
     *  Retrieves a framework from the server in a blocking fashion, specified by the ID
     * 
     *  @param {String}                 id
     *                                  ID of the framework to retrieve
     *  @param {Callback1<EcFramework>} success
     *                                  Callback triggered after successfully retrieving the framework,
     *                                  returns the retrieved framework
     *  @param {Callback1<String>}      failure
     *                                  Callback triggered if an error occurs while retrieving the framework
     *  @memberOf CfdFramework
     *  @method getBlocking
     *  @static
     */
    static cfdGetBlocking(id) {
        return EcRepository.getAs(id, new CfdFramework());
    };
    /**
     *  Searches the repository given for frameworks using the query passed in
     * 
     *  @param {EcRepository}                 repo
     *                                        Repository to search for frameworks
     *  @param {String}                       query
     *                                        Query string used to search for a framework
     *  @param {Callback1<Array<EcFramework>} success
     *                                        Callback triggered when the search successfully returns,
     *                                        returns search results
     *  @param {Callback1<String>}            failure
     *                                        Callback triggered if an error occurs while searching
     *  @param {Object}                       paramObj
     *                                        Parameter object for search
     *  @param size
     *  @param start
     *  @memberOf CfdFramework
     *  @method search
     *  @static
     */
    static cfdSearch(repo, query, success, failure, paramObj) {
        return EcRepository.searchAs(repo, query, () => new CfdFramework(), success, failure, paramObj);
    };
    /**
     *  Deletes this framework from the server specified by it's ID
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered if successfully deleted framework
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error occurs when deleting the framework
     *  @memberOf CfdFramework
     *  @method _delete
     *  FR: DID NOT PORT TO 5.x.x
     */
    _delete = function(success, failure) {
        if (CfdFramework.toRemove == null) 
            CfdFramework.toRemove = {};
        var remove = 0;
        remove += (this.competency == null ? 0 : this.competency.length);
        remove += (this.relation == null ? 0 : this.relation.length);
        CfdFramework.toRemove[this.shortId()] = remove;
        if (CfdFramework.removed == null) 
            CfdFramework.removed = {};
        CfdFramework.removed[this.shortId()] = 0;
        var that = this;
        var onAllRemove = function() {
            EcRepository.DELETE(that, success, failure);
        };
        if (remove == 0) 
            onAllRemove();
        if (this.competency != null && this.competency.length > 0) {
            for (var x = 0; x < this.competency.length; x++) {
                CfdCompetency.get(this.competency[x], function(comp) {
                    comp._delete(function(p1) {
                        CfdFramework.removed[that.shortId()] = CfdFramework.removed[that.shortId()] + 1;
                        if (CfdFramework.removed[that.shortId()] == CfdFramework.toRemove[that.shortId()]) 
                            onAllRemove();
                    }, function(err) {
                        var error = "Error deleting competency (" + comp.id + "): " + err;
                        failure(error);
                        CfdFramework.removed[that.shortId()] = CfdFramework.removed[that.shortId()] + 1;
                        if (CfdFramework.removed[that.shortId()] == CfdFramework.toRemove[that.shortId()]) 
                            onAllRemove();
                    }, null);
                }, function(err) {
                    var error = "Error retrieving competency to delete: " + err;
                    failure(error);
                    CfdFramework.removed[that.shortId()] = CfdFramework.removed[that.shortId()] + 1;
                    if (CfdFramework.removed[that.shortId()] == CfdFramework.toRemove[that.shortId()]) 
                        onAllRemove();
                });
            }
        }
        if (this.relation != null && this.relation.length > 0) {
            for (var x = 0; x < this.relation.length; x++) {
                EcAlignment.get(this.relation[x], function(rel) {
                    rel._delete(function(p1) {
                        CfdFramework.removed[that.shortId()] = CfdFramework.removed[that.shortId()] + 1;
                        if (CfdFramework.removed[that.shortId()] == CfdFramework.toRemove[that.shortId()]) 
                            onAllRemove();
                    }, function(err) {
                        var error = "Error deleting relation (" + rel.id + "): " + err;
                        failure(error);
                        CfdFramework.removed[that.shortId()] = CfdFramework.removed[that.shortId()] + 1;
                        if (CfdFramework.removed[that.shortId()] == CfdFramework.toRemove[that.shortId()]) 
                            onAllRemove();
                    });
                }, function(err) {
                    var error = "Error retrieving relationship to delete: " + err;
                    failure(error);
                    CfdFramework.removed[that.shortId()] = CfdFramework.removed[that.shortId()] + 1;
                    if (CfdFramework.removed[that.shortId()] == CfdFramework.toRemove[that.shortId()]) 
                        onAllRemove();
                });
            }
        }
        if (CfdFramework.removed[that.shortId()] == CfdFramework.toRemove[that.shortId()]) 
            onAllRemove();
    };
};
