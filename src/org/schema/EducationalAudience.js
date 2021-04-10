/**
 *  Schema.org/EducationalAudience
 *  An EducationalAudience.
 * 
 *  @author schema.org
 *  @class EducationalAudience
 *  @module org.schema
 *  @extends Audience
 */
var EducationalAudience = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Audience.call(this);
    this.context = "http://schema.org/";
    this.type = "EducationalAudience";
};
EducationalAudience = stjs.extend(EducationalAudience, Audience, [], function(constructor, prototype) {
    /**
     *  Schema.org/educationalRole
     *  An educationalRole of an EducationalAudience.
     * 
     *  @property educationalRole
     *  @type Text
     */
    educationalRole = null;
}, {geographicArea: "AdministrativeArea", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
