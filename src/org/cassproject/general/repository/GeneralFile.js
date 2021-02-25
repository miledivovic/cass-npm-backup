/**
 *  A representation of a file.
 * 
 *  @author fritz.ray@eduworks.com
 *  @module com.eduworks.ec
 *  @class GeneralFile
 *  @extends EcRemoteLinkedData
 *  @constructor
 */
var GeneralFile = function() {
    EcRemoteLinkedData.call(this, General.context, GeneralFile.myType);
};
GeneralFile = stjs.extend(GeneralFile, EcRemoteLinkedData, [], function(constructor, prototype) {
    constructor.TYPE_0_1 = "http://schema.eduworks.com/general/0.1/file";
    constructor.TYPE_0_2 = "http://schema.eduworks.com/general/0.2/file";
    constructor.myType = GeneralFile.TYPE_0_2;
    /**
     *  Optional checksum of the file, used to verify if the file has been
     *  transmitted correctly.
     * 
     *  @property checksum
     *  @type String
     */
    prototype.checksum = null;
    /**
     *  Mime type of the file.
     * 
     *  @property mimeType
     *  @type String
     */
    prototype.mimeType = null;
    /**
     *  Base-64 encoded version of the bytestream of a file.
     * 
     *  @property data
     *  @type String
     */
    prototype.data = null;
    /**
     *  Name of the file, used to distinguish it
     * 
     *  @property name
     *  @type String
     */
    prototype.name = null;
    /**
     *  Helper method to force the browser to download the file.
     * 
     *  @memberOf GeneralFile
     *  @method download
     */
    prototype.download = function() {
        var blob = base64ToBlob(this.data, this.mimeType);
        saveAs(blob, this.name);
    };
    prototype.upgrade = function() {
        EcRemoteLinkedData.prototype.upgrade.call(this);
        if (GeneralFile.TYPE_0_1.equals(this.type)) {
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(General.context_0_2, GeneralFile.TYPE_0_2);
        }
    };
    prototype.getTypes = function() {
        var a = new Array();
        a.push(GeneralFile.TYPE_0_2);
        a.push(GeneralFile.TYPE_0_1);
        return a;
    };
}, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
