/**
 *  Schema.org/Role
 *  Represents additional information about a relationship or property. For example a Role can be used to say that a 'member' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person's 'actor' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like 'member' or 'actor'.\n\nSee also [blog post](http://blog.schema.org/2014/06/introducing-role.html).
 * 
 *  @author schema.org
 *  @class Role
 *  @module org.schema
 *  @extends Intangible
 */
var Role = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "Role";
};
Role = stjs.extend(Role, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/endDate
     *  The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * 
     *  @property endDate
     *  @type DateTime
     */
    prototype.endDate = null;
    /**
     *  Schema.org/startDate
     *  The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * 
     *  @property startDate
     *  @type Date
     */
    prototype.startDate = null;
    /**
     *  Schema.org/namedPosition
     *  A position played, performed or filled by a person or organization, as part of an organization. For example, an athlete in a SportsTeam might play in the position named 'Quarterback'.
     * 
     *  @property namedPosition
     *  @type Text
     */
    prototype.namedPosition = null;
    /**
     *  Schema.org/roleName
     *  A role played, performed or filled by a person or organization. For example, the team of creators for a comic book might fill the roles named 'inker', 'penciller', and 'letterer'; or an athlete in a SportsTeam might play in the position named 'Quarterback'.
     * 
     *  @property roleName
     *  @type Text
     */
    prototype.roleName = null;
}, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
