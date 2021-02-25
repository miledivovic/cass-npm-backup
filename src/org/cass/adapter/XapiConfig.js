/**
 *  Object that holds the xAPI Adapter configuration values returned
 *  from the server and provides methods for saving new config values
 * 
 *  @author devlin.junker@eduworks.com
 *  @module org.cassproject
 *  @class XapiConfig
 *  @constructor
 */
var XapiConfig = function() {
    EcLinkedData.call(this, null, null);
};
XapiConfig = stjs.extend(XapiConfig, EcLinkedData, [], function(constructor, prototype) {
    prototype.enabled = false;
    prototype.xapiAuth = null;
    prototype.xapiEndpoint = null;
    prototype.xapiHostName = null;
    /**
     *  Retrieves the adapter configuration values from the server
     * 
     *  @param serverUrl URL of server to save configuration values to
     *  @param success   Callback triggered on successfully retrieving config values to server
     *  @param failure   Callback triggered if an error occurs while getting the config values
     *  @memberOf XapiConfig
     *  @method get
     *  @static
     */
    constructor.get = function(serverUrl, success, failure) {
        var fd = new FormData();
        var offset = EcRepository.setOffset(serverUrl);
        EcIdentityManager.signatureSheetAsync(60000 + offset, serverUrl, function(signatureSheet) {
            fd.append("signatureSheet", signatureSheet);
            EcRemote.postExpectingObject(serverUrl, "adapter/xapi/config/get", fd, success, failure);
        }, failure);
    };
    /**
     *  Saves this config Objects configuration values to the server specified
     * 
     *  @param serverUrl URL of server to save configuration values to
     *  @param success   Callback triggered on successfully saving config values to server
     *  @param failure   Callback triggered if an error occurs while saving the config values
     *  @memberOf XapiConfig
     *  @method save
     */
    prototype.save = function(serverUrl, success, failure) {
        var fd = new FormData();
        fd.append("config", JSON.stringify(this));
        var offset = EcRepository.setOffset(serverUrl);
        EcIdentityManager.signatureSheetAsync(60000 + offset, serverUrl, function(signatureSheet) {
            fd.append("signatureSheet", signatureSheet);
            EcRemote.postExpectingObject(serverUrl, "adapter/xapi/config/set", fd, success, failure);
        }, failure);
    };
}, {atProperties: {name: "Array", arguments: [null]}}, {});
