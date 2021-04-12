/**
 *  Competency is Under construction.
 *  <p>
 *  Working model of competency with CFD Assessment extension.
 * 
 *  @author debbie.brown@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  @class CfdAssessment
 *  @module com.eduworks
 *  @extends org.schema.CreativeWork
 */
module.exports = class CfdAssessment extends schema.CreativeWork{
    constructor(){
        CreativeWork.call(this);
        this.educationalUse = CfdAssessment.edUse;
    }
    static myType = "http://schema.org/CreativeWork";
    static edUse = "Assessment";
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
     *  @memberOf CfdAssessment
     *  @method get
     *  @static
     */
    static get(id, success, failure) {
        EcRepository.get(id, function(p1) {
            if (stjs.isInstanceOf(p1.constructor, CfdAssessment)) 
                if (success != null) {
                    success(p1);
                    return;
                }
            var assessment = new CfdAssessment();
            if (p1.isA(EcEncryptedValue.myType)) {
                var encrypted = new EcEncryptedValue();
                encrypted.copyFrom(p1);
                p1 = encrypted.decryptIntoObject();
            }
            if (p1.isAny(assessment.getTypes())) {
                assessment.copyFrom(p1);
                if (EcRepository.caching) {
                    (EcRepository.cache)[assessment.shortId()] = assessment;
                    (EcRepository.cache)[assessment.id] = assessment;
                }
                if (success != null) 
                    success(assessment);
            } else {
                var msg = "Resultant object is not an assessment.";
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
     *  @memberOf CfdAssessment
     *  @method getBlocking
     *  @static
     */
    static getBlocking(id) {
        var p1 = EcRepository.getBlocking(id);
        if (stjs.isInstanceOf(p1.constructor, CfdAssessment)) 
            return p1;
        var assessment = new CfdAssessment();
        if (p1.isA(EcEncryptedValue.myType)) {
            var encrypted = new EcEncryptedValue();
            encrypted.copyFrom(p1);
            p1 = encrypted.decryptIntoObject();
            EcEncryptedValue.encryptOnSave(p1.id, true);
        }
        if (p1.isAny(assessment.getTypes())) {
            assessment.copyFrom(p1);
            if (EcRepository.caching) {
                (EcRepository.cache)[assessment.shortId()] = assessment;
                (EcRepository.cache)[assessment.id] = assessment;
            }
            return assessment;
        } else {
            var msg = "Retrieved object was not an assessment";
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
     *  @memberOf CfdAssessment
     *  @method search
     *  @static
     */
    static search(repo, query, success, failure, paramObj) {
        var queryAdd = new CfdAssessment().getSearchStringByType();
        if (query == null || query == "") 
            query = queryAdd;
         else 
            query = "(" + query + ") AND educationalUse:\"" + CfdAssessment.edUse + "\" AND " + queryAdd;
        repo.searchWithParams(query, paramObj, null, function(p1) {
            if (success != null) {
                var ret = [];
                for (var i = 0; i < p1.length; i++) {
                    var assessment = new CfdAssessment();
                    if (p1[i].isAny(assessment.getTypes())) {
                        assessment.copyFrom(p1[i]);
                    } else if (p1[i].isA(EcEncryptedValue.myType)) {
                        var val = new EcEncryptedValue();
                        val.copyFrom(p1[i]);
                        if (val.isAnEncrypted(CfdAssessment.myType)) {
                            var obj = val.decryptIntoObject();
                            assessment.copyFrom(obj);
                        }
                    }
                    ret[i] = assessment;
                }
                success(ret);
            }
        }, failure);
    };
    /**
     *  Searches the repository for assessments with the framework and optional parameters provided
     * 
     *  @param {EcRepository}                  repo
     *                                         Repository to search using the query provided
     *  @param {String}                        Framework
     *                                         The Framework to search for References with EducationalAlignments too
     *  @param {Callback1<Array<EcAlignment>>} success
     *                                         Callback triggered on successful search return
     *  @param {Callback1<String>}             [failure]
     *                                         Callback triggered if error searching
     *  @param {Object}                        [paramObj]
     *                                         Parameters to include in the search
     *  @param start
     *  @param size
     *  @memberOf CfdReference
     *  @method search
     *  @static
     */
    static searchWithFramework(repo, framework, success, failure, paramObj) {
        var query = new CfdAssessment().getSearchStringByType();
        query = "(" + query + ") AND educationalUse:\"" + CfdAssessment.edUse + "\" AND educationalAlignment.educationalFramework:\"" + framework + "\"";
        repo.searchWithParams(query, paramObj, null, function(p1) {
            if (success != null) {
                var ret = [];
                for (var i = 0; i < p1.length; i++) {
                    var assessment = new CfdAssessment();
                    if (p1[i].isAny(assessment.getTypes())) {
                        assessment.copyFrom(p1[i]);
                    } else if (p1[i].isA(EcEncryptedValue.myType)) {
                        var val = new EcEncryptedValue();
                        val.copyFrom(p1[i]);
                        if (val.isAnEncrypted(CfdAssessment.myType)) {
                            var obj = val.decryptIntoObject();
                            assessment.copyFrom(obj);
                        }
                    }
                    ret[i] = assessment;
                }
                success(ret);
            }
        }, failure);
    };
    /**
     *  Returns the name of the assessment
     * 
     *  @return {String}
     *  name of assessment
     */
    getName() {
        return this.name;
    };
    /**
     *  Sets the Name of the assessment
     * 
     *  @param {String} name
     *                  name of the assessment
     */
    setName(name) {
        this.name = name;
    };
    /**
     *  Gets the educational alignment of the reference
     * 
     *  @return {CfdAlignment}
     *  Educational Alignment for reference
     */
    getEducationalAlignment() {
        return this.educationalAlignment;
    };
    /**
     *  Sets the educational alignment of the reference
     * 
     *  @param {CfdAlignment} alignment
     *                        Educational alignment for reference
     */
    setEducationalAlignment(alignment) {
        this.educationalAlignment = alignment;
    };
    /**
     *  Returns the Educational Use of the reference (Should be Assessment)
     * 
     *  @return {CfdAlignment}
     *  Educational Alignment for reference
     */
    getEducationalUse() {
        return CfdAssessment.edUse;
    };
    /**
     *  Saves this alignment details on the server corresponding to its ID
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successfully saving the alignment
     *  @param {Callback1<String>} [failure]
     *                             Callback triggered if error while saving alignment
     *  @method save
     */
    save(success, failure) {
        if (this.name == null || this.name == "") {
            var msg = "Name cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        if (this.educationalAlignment == null) {
            var msg = "Educational Alignment cannot be missing";
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
     *  @method _delete
     */
    _delete = function(success, failure) {
        EcRepository.DELETE(this, success, failure);
    };
};
