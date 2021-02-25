/**
 *  Schema.org/Permit
 *  A permit issued by an organization, e.g. a parking pass.
 * 
 *  @author schema.org
 *  @class Permit
 *  @module org.schema
 *  @extends Intangible
 */
var Permit = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "Permit";
};
Permit = stjs.extend(Permit, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/validFor
     *  The time validity of the permit.
     * 
     *  @property validFor
     *  @type Duration
     */
    prototype.validFor = null;
    /**
     *  Schema.org/validUntil
     *  The date when the item is no longer valid.
     * 
     *  @property validUntil
     *  @type Date
     */
    prototype.validUntil = null;
    /**
     *  Schema.org/validFrom
     *  The date when the item becomes valid.
     * 
     *  @property validFrom
     *  @type DateTime
     */
    prototype.validFrom = null;
    /**
     *  Schema.org/issuedBy
     *  The organization issuing the ticket or permit.
     * 
     *  @property issuedBy
     *  @type Organization
     */
    prototype.issuedBy = null;
    /**
     *  Schema.org/issuedThrough
     *  The service through with the permit was granted.
     * 
     *  @property issuedThrough
     *  @type Service
     */
    prototype.issuedThrough = null;
    /**
     *  Schema.org/permitAudience
     *  The target audience for this permit.
     * 
     *  @property permitAudience
     *  @type Audience
     */
    prototype.permitAudience = null;
    /**
     *  Schema.org/validIn
     *  The geographic area where the permit is valid.
     * 
     *  @property validIn
     *  @type AdministrativeArea
     */
    prototype.validIn = null;
}, {validFor: "Duration", issuedBy: "Organization", issuedThrough: "Service", permitAudience: "Audience", validIn: "AdministrativeArea", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
