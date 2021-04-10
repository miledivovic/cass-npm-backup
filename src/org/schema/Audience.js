/**
 *  Schema.org/Audience
 *  Intended audience for an item, i.e. the group for whom the item was created.
 * 
 *  @author schema.org
 *  @class Audience
 *  @module org.schema
 *  @extends Intangible
 */
var Audience = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "Audience";
};
Audience = stjs.extend(Audience, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/audienceType
     *  The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).
     * 
     *  @property audienceType
     *  @type Text
     */
    audienceType = null;
    /**
     *  Schema.org/geographicArea
     *  The geographic area associated with the audience.
     * 
     *  @property geographicArea
     *  @type AdministrativeArea
     */
    geographicArea = null;
}, {geographicArea: "AdministrativeArea", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
