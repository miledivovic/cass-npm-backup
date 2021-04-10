/**
 *  Schema.org/EntryPoint
 *  An entry point, within some Web-based protocol.
 * 
 *  @author schema.org
 *  @class EntryPoint
 *  @module org.schema
 *  @extends Intangible
 */
var EntryPoint = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "EntryPoint";
};
EntryPoint = stjs.extend(EntryPoint, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/urlTemplate
     *  An url template (RFC6570) that will be used to construct the target of the execution of the action.
     * 
     *  @property urlTemplate
     *  @type Text
     */
    urlTemplate = null;
    /**
     *  Schema.org/actionApplication
     *  An application that can complete the request.
     * 
     *  @property actionApplication
     *  @type SoftwareApplication
     */
    actionApplication = null;
    /**
     *  Schema.org/application
     *  An application that can complete the request.
     * 
     *  @property application
     *  @type SoftwareApplication
     */
    application = null;
    /**
     *  Schema.org/actionPlatform
     *  The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication.
     * 
     *  @property actionPlatform
     *  @type Text
     */
    actionPlatform = null;
    /**
     *  Schema.org/httpMethod
     *  An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP.
     * 
     *  @property httpMethod
     *  @type Text
     */
    httpMethod = null;
    /**
     *  Schema.org/encodingType
     *  The supported encoding type(s) for an EntryPoint request.
     * 
     *  @property encodingType
     *  @type Text
     */
    encodingType = null;
    /**
     *  Schema.org/contentType
     *  The supported content type(s) for an EntryPoint response.
     * 
     *  @property contentType
     *  @type Text
     */
    contentType = null;
}, {actionApplication: "SoftwareApplication", application: "SoftwareApplication", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
