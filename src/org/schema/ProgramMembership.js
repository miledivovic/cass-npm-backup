/**
 *  Schema.org/ProgramMembership
 *  Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 * 
 *  @author schema.org
 *  @class ProgramMembership
 *  @module org.schema
 *  @extends Intangible
 */
var ProgramMembership = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "ProgramMembership";
};
ProgramMembership = stjs.extend(ProgramMembership, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/membershipNumber
     *  A unique identifier for the membership.
     * 
     *  @property membershipNumber
     *  @type Text
     */
    membershipNumber = null;
    /**
     *  Schema.org/members
     *  A member of this organization.
     * 
     *  @property members
     *  @type Organization
     */
    members = null;
    /**
     *  Schema.org/member
     *  A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
     * 
     *  @property member
     *  @type Organization
     */
    member = null;
    /**
     *  Schema.org/hostingOrganization
     *  The organization (airline, travelers' club, etc.) the membership is made with.
     * 
     *  @property hostingOrganization
     *  @type Organization
     */
    hostingOrganization = null;
    /**
     *  Schema.org/programName
     *  The program providing the membership.
     * 
     *  @property programName
     *  @type Text
     */
    programName = null;
}, {members: "Organization", member: "Organization", hostingOrganization: "Organization", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
