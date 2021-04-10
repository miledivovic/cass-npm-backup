/**
 *  Schema.org/ParentAudience
 *  A set of characteristics describing parents, who can be interested in viewing some content.
 * 
 *  @author schema.org
 *  @class ParentAudience
 *  @module org.schema
 *  @extends PeopleAudience
 */
var ParentAudience = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    PeopleAudience.call(this);
    this.context = "http://schema.org/";
    this.type = "ParentAudience";
};
ParentAudience = stjs.extend(ParentAudience, PeopleAudience, [], function(constructor, prototype) {
    /**
     *  Schema.org/childMaxAge
     *  Maximal age of the child.
     * 
     *  @property childMaxAge
     *  @type Number
     */
    childMaxAge = null;
    /**
     *  Schema.org/childMinAge
     *  Minimal age of the child.
     * 
     *  @property childMinAge
     *  @type Number
     */
    childMinAge = null;
}, {geographicArea: "AdministrativeArea", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
