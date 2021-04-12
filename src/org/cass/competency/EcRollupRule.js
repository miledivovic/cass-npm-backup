/**
 *  Implementation of a Rollup Rule object with methods for interacting with CASS
 *  services on a server.
 * 
 *  @author fritz.ray@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  @module org.cassproject
 *  @class EcRollupRule
 *  @constructor
 *  @extends RollupRule
 */
module.exports = class EcRollupRule extends RollupRule{
    /**
     *  Retrieves a rollup rule from the server
     * 
     *  @param {String}                  id
     *                                   ID of the rollup rule to retrieve
     *  @param {Callback1<EcRollupRule>} success
     *                                   Callback triggered on successful retrieving rollup rule,
     *                                   returns the rollup rule
     *  @param {Callback1<String>}       failure
     *                                   Callback triggered if error retrieving rollup rule
     *  @memberOf EcRollupRule
     *  @method get
     *  @static
     */
    static get(id, success, failure) {
        EcRepository.getAs(id, new EcRollupRule(), success, failure);
    };
    static getBlocking(id) {
        return EcRepository.getBlockingAs(id, new EcRollupRule());
    };
    /**
     *  Searches for levels with a string query
     * 
     *  @param {EcRepository}                   repo
     *                                          Repository to search for levels
     *  @param {String}                         query
     *                                          query string to use in search
     *  @param {Callback1<Array<EcRollupRule>>} success
     *                                          Callback triggered when searches successfully
     *  @param {Callback1<String>}              failure
     *                                          Callback triggered if an error occurs while searching
     *  @param {Object}                         paramObj
     *                                          Search parameters object to pass in
     *  @memberOf EcRollupRule
     *  @method search
     *  @static
     */
    static search(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcRollupRule();
        }, success, failure, paramObj);
    };
    /**
     *  Method for setting a rollup rule name
     * 
     *  @param name
     *  @memberOf EcRollupRule
     *  @method setName
     */
    setName(name) {
        this.name = name;
    };
    /**
     *  Method for setting a rollup rule description
     * 
     *  @param {String} description
     *  @memberOf EcRollupRule
     *  @method setDescription
     */
    setDescription(description) {
        this.description = description;
    };
    /**
     *  Saves this rollup rules details on the server specified by its ID
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successful save of rollup rule
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error saving rollup rule
     *  @memberOf EcRollupRule
     *  @method save
     */
    save(success, failure, repo) {
        if (this.rule == null || this.rule == "") {
            var msg = "RollupRule Rule cannot be empty";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        if (this.competency == null || this.competency == "") {
            var msg = "RollupRule's Competency cannot be empty";
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
     *  Deletes this rollup rule from the server specified by it's ID
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successful deleting the rollup rle
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error deleting the rollup rule
     *  @memberOf EcRollupRule
     *  @method _delete
     */
    _delete = function(success, failure) {
        EcRepository.DELETE(this, success, failure);
    };
};
