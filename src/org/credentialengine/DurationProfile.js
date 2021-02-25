/**
 *  credentialengine.org/DurationProfile
 *  Entity describing the temporal aspects of a resource.
 *  Temporal aspects include exact, minimum, and maximum timeframes of an activity.
 *  @author credentialengine.org
 *  @class DurationProfile
 *  @module org.credentialengine
 */
var DurationProfile = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "DurationProfile");
};
DurationProfile = stjs.extend(DurationProfile, EcRemoteLinkedData, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/description
     *  Statement, characterization or account of the entity.
     *  @property description
     *  @type langString
     */
    prototype.description = null;
    /**
     *  http://purl.org/ctdl/terms/exactDuration
     *  Exact period of time of an activity or event.
     *  @property exactDuration
     *  @type duration
     */
    prototype.exactDuration = null;
    /**
     *  http://purl.org/ctdl/terms/maximumDuration
     *  Maximum amount of time it will take to complete the activity.
     *  The value of ceterms:maximumDuration denotes an approximation of duration.
     *  @property maximumDuration
     *  @type duration
     */
    prototype.maximumDuration = null;
    /**
     *  http://purl.org/ctdl/terms/minimumDuration
     *  Minimum amount of time it will take to complete the activity.
     *  The value of ceterms:minimumDuration denotes an approximation of duration.
     *  @property minimumDuration
     *  @type duration
     */
    prototype.minimumDuration = null;
}, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
