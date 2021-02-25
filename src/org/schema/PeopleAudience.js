/**
 *  Schema.org/PeopleAudience
 *  A set of characteristics belonging to people, e.g. who compose an item's target audience.
 * 
 *  @author schema.org
 *  @class PeopleAudience
 *  @module org.schema
 *  @extends Audience
 */
var PeopleAudience = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Audience.call(this);
    this.context = "http://schema.org/";
    this.type = "PeopleAudience";
};
PeopleAudience = stjs.extend(PeopleAudience, Audience, [], function(constructor, prototype) {
    /**
     *  Schema.org/suggestedMaxAge
     *  Maximal age recommended for viewing content.
     * 
     *  @property suggestedMaxAge
     *  @type Number
     */
    prototype.suggestedMaxAge = null;
    /**
     *  Schema.org/requiredMinAge
     *  Audiences defined by a person's minimum age.
     * 
     *  @property requiredMinAge
     *  @type Integer
     */
    prototype.requiredMinAge = null;
    /**
     *  Schema.org/requiredGender
     *  Audiences defined by a person's gender.
     * 
     *  @property requiredGender
     *  @type Text
     */
    prototype.requiredGender = null;
    /**
     *  Schema.org/suggestedGender
     *  The gender of the person or audience.
     * 
     *  @property suggestedGender
     *  @type Text
     */
    prototype.suggestedGender = null;
    /**
     *  Schema.org/requiredMaxAge
     *  Audiences defined by a person's maximum age.
     * 
     *  @property requiredMaxAge
     *  @type Integer
     */
    prototype.requiredMaxAge = null;
    /**
     *  Schema.org/suggestedMinAge
     *  Minimal age recommended for viewing content.
     * 
     *  @property suggestedMinAge
     *  @type Number
     */
    prototype.suggestedMinAge = null;
}, {geographicArea: "AdministrativeArea", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
