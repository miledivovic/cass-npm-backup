/**
 *  Schema.org/PerformanceRole
 *  A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc.
 * 
 *  @author schema.org
 *  @class PerformanceRole
 *  @module org.schema
 *  @extends Role
 */
var PerformanceRole = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Role.call(this);
    this.context = "http://schema.org/";
    this.type = "PerformanceRole";
};
PerformanceRole = stjs.extend(PerformanceRole, Role, [], function(constructor, prototype) {
    /**
     *  Schema.org/characterName
     *  The name of a character played in some acting or performing role, i.e. in a PerformanceRole.
     * 
     *  @property characterName
     *  @type Text
     */
    prototype.characterName = null;
}, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
