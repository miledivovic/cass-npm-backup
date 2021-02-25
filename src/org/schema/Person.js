/**
 *  Schema.org/Person
 *  A person (alive, dead, undead, or fictional).
 * 
 *  @author schema.org
 *  @class Person
 *  @module org.schema
 *  @extends Thing
 */
var Person = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Thing.call(this);
    this.context = "http://schema.org/";
    this.type = "Person";
};
Person = stjs.extend(Person, Thing, [], function(constructor, prototype) {
    /**
     *  Schema.org/address
     *  Physical address of the item.
     * 
     *  @property address
     *  @type PostalAddress
     */
    prototype.address = null;
    /**
     *  Schema.org/spouse
     *  The person's spouse.
     * 
     *  @property spouse
     *  @type Person
     */
    prototype.spouse = null;
    /**
     *  Schema.org/funder
     *  A person or organization that supports (sponsors) something through some kind of financial contribution.
     * 
     *  @property funder
     *  @type Person
     */
    prototype.funder = null;
    /**
     *  Schema.org/colleagues
     *  A colleague of the person.
     * 
     *  @property colleagues
     *  @type Person
     */
    prototype.colleagues = null;
    /**
     *  Schema.org/deathDate
     *  Date of death.
     * 
     *  @property deathDate
     *  @type Date
     */
    prototype.deathDate = null;
    /**
     *  Schema.org/memberOf
     *  An Organization (or ProgramMembership) to which this Person or Organization belongs.
     * 
     *  @property memberOf
     *  @type Organization
     */
    prototype.memberOf = null;
    /**
     *  Schema.org/height
     *  The height of the item.
     * 
     *  @property height
     *  @type Distance
     */
    prototype.height = null;
    /**
     *  Schema.org/workLocation
     *  A contact location for a person's place of work.
     * 
     *  @property workLocation
     *  @type ContactPoint
     */
    prototype.workLocation = null;
    /**
     *  Schema.org/netWorth
     *  The total financial value of the person as calculated by subtracting assets from liabilities.
     * 
     *  @property netWorth
     *  @type PriceSpecification
     */
    prototype.netWorth = null;
    /**
     *  Schema.org/children
     *  A child of the person.
     * 
     *  @property children
     *  @type Person
     */
    prototype.children = null;
    /**
     *  Schema.org/jobTitle
     *  The job title of the person (for example, Financial Manager).
     * 
     *  @property jobTitle
     *  @type Text
     */
    prototype.jobTitle = null;
    /**
     *  Schema.org/hasOfferCatalog
     *  Indicates an OfferCatalog listing for this Organization, Person, or Service.
     * 
     *  @property hasOfferCatalog
     *  @type OfferCatalog
     */
    prototype.hasOfferCatalog = null;
    /**
     *  Schema.org/deathPlace
     *  The place where the person died.
     * 
     *  @property deathPlace
     *  @type Place
     */
    prototype.deathPlace = null;
    /**
     *  Schema.org/globalLocationNumber
     *  The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
     * 
     *  @property globalLocationNumber
     *  @type Text
     */
    prototype.globalLocationNumber = null;
    /**
     *  Schema.org/birthPlace
     *  The place where the person was born.
     * 
     *  @property birthPlace
     *  @type Place
     */
    prototype.birthPlace = null;
    /**
     *  Schema.org/gender
     *  Gender of the person. While schema:Male and schema:Female may be used, text strings are also acceptable for people who do not identify as a binary gender.
     * 
     *  @property gender
     *  @type Text
     */
    prototype.gender = null;
    /**
     *  Schema.org/parents
     *  A parents of the person.
     * 
     *  @property parents
     *  @type Person
     */
    prototype.parents = null;
    /**
     *  Schema.org/alumniOf
     *  An organization that the person is an alumni of.
     * 
     *  @property alumniOf
     *  @type EducationalOrganization
     */
    prototype.alumniOf = null;
    /**
     *  Schema.org/homeLocation
     *  A contact location for a person's residence.
     * 
     *  @property homeLocation
     *  @type ContactPoint
     */
    prototype.homeLocation = null;
    /**
     *  Schema.org/duns
     *  The Dun & Bradstreet DUNS number for identifying an organization or business person.
     * 
     *  @property duns
     *  @type Text
     */
    prototype.duns = null;
    /**
     *  Schema.org/taxID
     *  The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
     * 
     *  @property taxID
     *  @type Text
     */
    prototype.taxID = null;
    /**
     *  Schema.org/award
     *  An award won by or for this item.
     * 
     *  @property award
     *  @type Text
     */
    prototype.award = null;
    /**
     *  Schema.org/birthDate
     *  Date of birth.
     * 
     *  @property birthDate
     *  @type Date
     */
    prototype.birthDate = null;
    /**
     *  Schema.org/makesOffer
     *  A pointer to products or services offered by the organization or person.
     * 
     *  @property makesOffer
     *  @type Offer
     */
    prototype.makesOffer = null;
    /**
     *  Schema.org/contactPoints
     *  A contact point for a person or organization.
     * 
     *  @property contactPoints
     *  @type ContactPoint
     */
    prototype.contactPoints = null;
    /**
     *  Schema.org/awards
     *  Awards won by or for this item.
     * 
     *  @property awards
     *  @type Text
     */
    prototype.awards = null;
    /**
     *  Schema.org/familyName
     *  Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the name property.
     * 
     *  @property familyName
     *  @type Text
     */
    prototype.familyName = null;
    /**
     *  Schema.org/seeks
     *  A pointer to products or services sought by the organization or person (demand).
     * 
     *  @property seeks
     *  @type Demand
     */
    prototype.seeks = null;
    /**
     *  Schema.org/sibling
     *  A sibling of the person.
     * 
     *  @property sibling
     *  @type Person
     */
    prototype.sibling = null;
    /**
     *  Schema.org/performerIn
     *  SchemaEvent that this person is a performer or participant in.
     * 
     *  @property performerIn
     *  @type SchemaEvent
     */
    prototype.performerIn = null;
    /**
     *  Schema.org/honorificPrefix
     *  An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
     * 
     *  @property honorificPrefix
     *  @type Text
     */
    prototype.honorificPrefix = null;
    /**
     *  Schema.org/additionalName
     *  An additional name for a Person, can be used for a middle name.
     * 
     *  @property additionalName
     *  @type Text
     */
    prototype.additionalName = null;
    /**
     *  Schema.org/siblings
     *  A sibling of the person.
     * 
     *  @property siblings
     *  @type Person
     */
    prototype.siblings = null;
    /**
     *  Schema.org/telephone
     *  The telephone number.
     * 
     *  @property telephone
     *  @type Text
     */
    prototype.telephone = null;
    /**
     *  Schema.org/email
     *  Email address.
     * 
     *  @property email
     *  @type Text
     */
    prototype.email = null;
    /**
     *  Schema.org/weight
     *  The weight of the product or person.
     * 
     *  @property weight
     *  @type QuantitativeValue
     */
    prototype.weight = null;
    /**
     *  Schema.org/contactPoint
     *  A contact point for a person or organization.
     * 
     *  @property contactPoint
     *  @type ContactPoint
     */
    prototype.contactPoint = null;
    /**
     *  Schema.org/colleague
     *  A colleague of the person.
     * 
     *  @property colleague
     *  @type URL
     */
    prototype.colleague = null;
    /**
     *  Schema.org/givenName
     *  Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the name property.
     * 
     *  @property givenName
     *  @type Text
     */
    prototype.givenName = null;
    /**
     *  Schema.org/naics
     *  The North American Industry Classification System (NAICS) code for a particular organization or business person.
     * 
     *  @property naics
     *  @type Text
     */
    prototype.naics = null;
    /**
     *  Schema.org/hasPOS
     *  Points-of-Sales operated by the organization or person.
     * 
     *  @property hasPOS
     *  @type Place
     */
    prototype.hasPOS = null;
    /**
     *  Schema.org/parent
     *  A parent of this person.
     * 
     *  @property parent
     *  @type Person
     */
    prototype.parent = null;
    /**
     *  Schema.org/owns
     *  Products owned by the organization or person.
     * 
     *  @property owns
     *  @type OwnershipInfo
     */
    prototype.owns = null;
    /**
     *  Schema.org/affiliation
     *  An organization that this person is affiliated with. For example, a school/university, a club, or a team.
     * 
     *  @property affiliation
     *  @type Organization
     */
    prototype.affiliation = null;
    /**
     *  Schema.org/sponsor
     *  A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     * 
     *  @property sponsor
     *  @type Organization
     */
    prototype.sponsor = null;
    /**
     *  Schema.org/isicV4
     *  The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
     * 
     *  @property isicV4
     *  @type Text
     */
    prototype.isicV4 = null;
    /**
     *  Schema.org/brand
     *  The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
     * 
     *  @property brand
     *  @type Organization
     */
    prototype.brand = null;
    /**
     *  Schema.org/honorificSuffix
     *  An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.
     * 
     *  @property honorificSuffix
     *  @type Text
     */
    prototype.honorificSuffix = null;
    /**
     *  Schema.org/vatID
     *  The Value-added Tax ID of the organization or person.
     * 
     *  @property vatID
     *  @type Text
     */
    prototype.vatID = null;
    /**
     *  Schema.org/nationality
     *  Nationality of the person.
     * 
     *  @property nationality
     *  @type Country
     */
    prototype.nationality = null;
    /**
     *  Schema.org/faxNumber
     *  The fax number.
     * 
     *  @property faxNumber
     *  @type Text
     */
    prototype.faxNumber = null;
    /**
     *  Schema.org/relatedTo
     *  The most generic familial relation.
     * 
     *  @property relatedTo
     *  @type Person
     */
    prototype.relatedTo = null;
    /**
     *  Schema.org/follows
     *  The most generic uni-directional social relation.
     * 
     *  @property follows
     *  @type Person
     */
    prototype.follows = null;
    /**
     *  Schema.org/knows
     *  The most generic bi-directional social/work relation.
     * 
     *  @property knows
     *  @type Person
     */
    prototype.knows = null;
    /**
     *  Schema.org/worksFor
     *  Organizations that the person works for.
     * 
     *  @property worksFor
     *  @type Organization
     */
    prototype.worksFor = null;
}, {address: "PostalAddress", spouse: "Person", funder: "Person", colleagues: "Person", memberOf: "Organization", height: "Distance", workLocation: "ContactPoint", netWorth: "PriceSpecification", children: "Person", hasOfferCatalog: "OfferCatalog", deathPlace: "Place", birthPlace: "Place", parents: "Person", alumniOf: "EducationalOrganization", homeLocation: "ContactPoint", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", sibling: "Person", performerIn: "SchemaEvent", siblings: "Person", weight: "QuantitativeValue", contactPoint: "ContactPoint", hasPOS: "Place", parent: "Person", owns: "OwnershipInfo", affiliation: "Organization", sponsor: "Organization", brand: "Organization", nationality: "Country", relatedTo: "Person", follows: "Person", knows: "Person", worksFor: "Organization", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
