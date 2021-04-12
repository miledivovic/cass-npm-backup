module.exports = class CfdAlignment extends schema.AlignmentObject{
    static myType = "http://schema.org/AlignmentObject";
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
        EcRepository.get(id, function(p1) {
            if (stjs.isInstanceOf(p1.constructor, CfdAlignment)) 
                if (success != null) {
                    success(p1);
                    return;
                }
            var alignment = new CfdAlignment();
            if (p1.isA(EcEncryptedValue.myType)) {
                var encrypted = new EcEncryptedValue();
                encrypted.copyFrom(p1);
                p1 = encrypted.decryptIntoObject();
            }
            if (p1.isAny(alignment.getTypes())) {
                alignment.copyFrom(p1);
                if (EcRepository.caching) {
                    (EcRepository.cache)[alignment.shortId()] = alignment;
                    (EcRepository.cache)[alignment.id] = alignment;
                }
                if (success != null) 
                    success(alignment);
            } else {
                var msg = "Resultant object is not a relation.";
                if (failure != null) 
                    failure(msg);
                 else 
                    console.error(msg);
            }
        }, failure);
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
        var p1 = EcRepository.getBlocking(id);
        if (stjs.isInstanceOf(p1.constructor, CfdAlignment)) 
            return p1;
        var alignment = new CfdAlignment();
        if (p1.isA(EcEncryptedValue.myType)) {
            var encrypted = new EcEncryptedValue();
            encrypted.copyFrom(p1);
            p1 = encrypted.decryptIntoObject();
            EcEncryptedValue.encryptOnSave(p1.id, true);
        }
        if (p1.isAny(alignment.getTypes())) {
            alignment.copyFrom(p1);
            if (EcRepository.caching) {
                (EcRepository.cache)[alignment.shortId()] = alignment;
                (EcRepository.cache)[alignment.id] = alignment;
            }
            return alignment;
        } else {
            var msg = "Retrieved object was not a relation";
            console.error(msg);
            return null;
        }
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
     *  @param start
     *  @param size
     *  @memberOf EcAlignment
     *  @method search
     *  @static
     */
    static search(repo, query, success, failure, paramObj) {
        var queryAdd = new CfdAlignment().getSearchStringByType();
        if (query == null || query == "") 
            query = queryAdd;
         else 
            query = "(" + query + ") AND " + queryAdd;
        repo.searchWithParams(query, paramObj, null, function(p1) {
            if (success != null) {
                var ret = [];
                for (var i = 0; i < p1.length; i++) {
                    var alignment = new CfdAlignment();
                    if (p1[i].isAny(alignment.getTypes())) {
                        alignment.copyFrom(p1[i]);
                    } else if (p1[i].isA(EcEncryptedValue.myType)) {
                        var val = new EcEncryptedValue();
                        val.copyFrom(p1[i]);
                        if (val.isAnEncrypted(CfdAlignment.myType)) {
                            var obj = val.decryptIntoObject();
                            alignment.copyFrom(obj);
                        }
                    }
                    ret[i] = alignment;
                }
                success(ret);
            }
        }, failure);
    };
    /**
     *  Gets the AlignmentObject educationalFramework field of this alignment
     * 
     *  @param {String} frameworkId
     *                  ID of framework this Alignment is related to
     */
    getEducationalFramework() {
        return this.educationalFramework;
    };
    /**
     *  Sets the AlignmentObject educationalFramework field with the id of the framework this competency is part of
     * 
     *  @param {String} frameworkId
     *                  ID of framework this Alignment is related to
     */
    setEducationalFramework(frameworkId) {
        this.educationalFramework = frameworkId;
    };
    /**
     *  Gets the AlignmentObject targetUrl field with the id of the competency it is aligned with
     * 
     *  @return {String}
     *  ID of the competency aligned with
     */
    getTargetUrl() {
        return this.targetUrl;
    };
    /**
     *  Sets the AlignmentObject targetUrl field with the id of the competency it is aligned with
     * 
     *  @param {String} targetId
     *                  ID of competency this Alignment is related to
     */
    setTargetUrl(targetId) {
        this.targetUrl = targetId;
    };
    /**
     *  Sets the AlignmentObject alignmentType field
     * 
     *  @param {String} type
     *                  Alignment type for alignment. Recommended values include: 'assesses', 'teaches', 'requires', 'textComplexity', 'readingLevel', 'educationalSubject', and 'educationalLevel'.
     */
    setAlignmentType(type) {
        this.alignmentType = type;
    };
    /**
     *  Saves this alignment details on the server corresponding to its ID
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successfully saving the alignment
     *  @param {Callback1<String>} [failure]
     *                             Callback triggered if error while saving alignment
     *  @memberOf CfdAlignment
     *  @method save
     */
    save(success, failure) {
        if (this.targetUrl == null || this.targetUrl == "") {
            var msg = "Target Competency cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        if (this.alignmentType == null || this.alignmentType == "") {
            var msg = "Relation Type cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        EcRepository.save(this, success, failure);
    };
    /**
     *  Deletes the alignment from the server corresponding to its ID
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successfully deleting the alignment
     *  @param {Callback1<String>} [failure]
     *                             Callback triggered if error while deleting alignment
     *  @memberOf CfdAlignment
     *  @method _delete
     */
    _delete = function(success, failure) {
        EcRepository.DELETE(this, success, failure);
    };
};
