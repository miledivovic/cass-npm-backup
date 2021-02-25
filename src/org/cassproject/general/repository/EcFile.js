/**
 *  Implementation of a file with methods for communicating with repository services
 * 
 *  @author devlin.junker@eduworks.com
 *  @module com.eduworks.ec
 *  @class EcFile
 *  @extends GeneralFile
 *  @constructor
 */
var EcFile = function() {
    GeneralFile.call(this);
};
EcFile = stjs.extend(EcFile, GeneralFile, [], function(constructor, prototype) {
    /**
     *  Factory method for creating a file with certain values
     * 
     *  @param {String} name
     *                  Name of the file to be created
     *  @param {String} base64Data
     *                  Base 64 encoded file data
     *  @param {String} mimeType
     *                  MIME Type of the file
     *  @return {EcFile}
     *  The file created
     *  @memberOf EcFile
     *  @method create
     *  @static
     */
    constructor.create = function(name, base64Data, mimeType) {
        var f = new EcFile();
        f.data = base64Data;
        f.name = name;
        f.mimeType = mimeType;
        return f;
    };
    /**
     *  Retrieves a file from the server specified by it's ID
     * 
     *  @param {String}            id
     *                             ID of the file data to be retrieved
     *  @param {Callback1<EcFile>} success
     *                             Callback triggered if successfully retrieved from the server,
     *                             returns the retrieved file
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error occurs while retrieving file from server
     *  @memberOf EcFile
     *  @method get
     *  @static
     */
    constructor.get = function(id, success, failure) {
        EcRepository.getAs(id, new EcFile(), success, failure);
    };
    constructor.getBlocking = function(id) {
        return EcRepository.getBlockingAs(id, new EcFile());
    };
    /**
     *  Searches the repository given for files that match the query passed in
     * 
     *  @param {EcRepository}       repo
     *                              Repository to search for files
     *  @param {String}             query
     *                              Query to user for search
     *  @param {Callback1<EcFile[]> success
     *                              Callback triggered after search completes,
     *                              returns results
     *  @param {Callback1<String>}  failure
     *                              Callback triggered if error occurs while searching
     *  @param {Object}             paramObj
     *                              Parameters to pass to search
     *  @memberOf EcFile
     *  @method search
     *  @static
     */
    constructor.search = function(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcFile();
        }, success, failure, paramObj);
    };
    /**
     *  Saves this file in the repository using the repository web services
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered if successfully saved
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error occurs while saving
     *  @memberOf EcFile
     *  @method save
     */
    prototype.save = function(success, failure) {
        if (this.name == null || this.name == "") {
            var msg = "File Name can not be empty";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        EcRepository.save(this, success, failure);
    };
    /**
     *  Deletes the file from the repository using repository web services
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered if successfully deleted
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error occurs while deleting
     *  @memberOf EcFile
     *  @method _delete
     */
    prototype._delete = function(repo, success, failure) {
        repo.constructor.DELETE(this, success, failure);
    };
}, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
