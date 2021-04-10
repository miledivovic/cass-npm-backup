/**
 *  Object that holds the Moodle Adapter configuration values returned
 *  from the server and provides methods for saving new config values
 * 
 *  @author devlin.junker@eduworks.com
 *  @module org.cassproject
 *  @class MoodleConfig
 *  @constructor
 */
var MoodleConfig = function() {
    EcLinkedData.call(this, null, null);
};
MoodleConfig = stjs.extend(MoodleConfig, EcLinkedData, [], function(constructor, prototype) {
    enabled = false;
    moodleEndpoint = null;
    moodleToken = null;
    /**
     *  Retrieves the Moodle adapter configuration values from the server
     * 
     *  @param {String}            serverUrl
     *                             URL of server to save configuration values to
     *  @param {Callback1<Object>} success
     *                             Callback triggered on successfully retrieving config values to server
     *  @param {Callback1<String>} failure
     *                             Callback triggered if an error occurs while getting the config values
     *  @memberOf MoodleConfig
     *  @method get
     *  @static
     */
    static get(serverUrl, success, failure) {
        var fd = new FormData();
        var offset = EcRepository.setOffset(serverUrl);
        EcIdentityManager.signatureSheetAsync(60000 + offset, serverUrl, function(signatureSheet) {
            fd.append("signatureSheet", signatureSheet);
            EcRemote.postExpectingObject(serverUrl, "adapter/moodle/config/get", fd, success, failure);
        }, failure);
    };
    /**
     *  Retrieves the Moodle adapter Encryption Key from the server to share frameworks with
     * 
     *  @param {String}            serverUrl
     *                             URL of server to save configuration values to
     *  @param {Callback1<String>} success
     *                             Callback triggered on successfully retrieving config values to server
     *  @param {Callback1<String>} failure
     *                             Callback triggered if an error occurs while getting the config values
     *  @memberOf MoodleConfig
     *  @method get
     *  @static
     */
    static getMoodleKey(serverUrl, success, failure) {
        var fd = new FormData();
        var offset = EcRepository.setOffset(serverUrl);
        EcIdentityManager.signatureSheetAsync(60000 + offset, serverUrl, function(signatureSheet) {
            fd.append("signatureSheet", signatureSheet);
            EcRemote.postExpectingString(serverUrl, "adapter/moodle/config/key", fd, success, failure);
        }, failure);
    };
    static syncCassToMoodle(serverUrl, success, failure) {
        EcRemote.postExpectingString(serverUrl, "moodle/cassToMoodle", new FormData(), success, failure);
    };
    static syncMoodleToCass(serverUrl, success, failure) {
        EcRemote.postExpectingString(serverUrl, "moodle/moodleToCass", new FormData(), success, failure);
    };
    /**
     *  Saves this config Objects configuration values to the server specified
     * 
     *  @param {String}            serverUrl
     *                             URL of server to save configuration values to
     *  @param {Callback1<Object>} success
     *                             Callback triggered on successfully saving config values to server
     *  @param {Callback1<String>} failure
     *                             Callback triggered if an error occurs while saving the config values
     *  @memberOf MoodleConfig
     *  @method save
     */
    save(serverUrl, success, failure) {
        var fd = new FormData();
        fd.append("config", JSON.stringify(this));
        var offset = EcRepository.setOffset(serverUrl);
        EcIdentityManager.signatureSheetAsync(60000 + offset, serverUrl, function(signatureSheet) {
            fd.append("signatureSheet", signatureSheet);
            EcRemote.postExpectingObject(serverUrl, "adapter/moodle/config/set", fd, success, failure);
        }, failure);
    };
}, {atProperties: {name: "Array", arguments: [null]}}, {});
