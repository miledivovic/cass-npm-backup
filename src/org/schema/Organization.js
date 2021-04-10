/**
 *  Schema.org/Organization
 *  An organization such as a school, NGO, corporation, club, etc.
 * 
 *  @author schema.org
 *  @class Organization
 *  @module org.schema
 *  @extends Thing
 */
var Organization = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Thing.call(this);
    this.context = "http://schema.org/";
    this.type = "Organization";
};
Organization = stjs.extend(Organization, Thing, [], function(constructor, prototype) {
    /**
     *  Schema.org/serviceArea
     *  The geographic area where the service is provided.
     * 
     *  @property serviceArea
     *  @type GeoShape
     */
    serviceArea = null;
    /**
     *  Schema.org/address
     *  Physical address of the item.
     * 
     *  @property address
     *  @type PostalAddress
     */
    address = null;
    /**
     *  Schema.org/funder
     *  A person or organization that supports (sponsors) something through some kind of financial contribution.
     * 
     *  @property funder
     *  @type Person
     */
    funder = null;
    /**
     *  Schema.org/memberOf
     *  An Organization (or ProgramMembership) to which this Person or Organization belongs.
     * 
     *  @property memberOf
     *  @type Organization
     */
    memberOf = null;
    /**
     *  Schema.org/subOrganization
     *  A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
     * 
     *  @property subOrganization
     *  @type Organization
     */
    subOrganization = null;
    /**
     *  Schema.org/hasOfferCatalog
     *  Indicates an OfferCatalog listing for this Organization, Person, or Service.
     * 
     *  @property hasOfferCatalog
     *  @type OfferCatalog
     */
    hasOfferCatalog = null;
    /**
     *  Schema.org/globalLocationNumber
     *  The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
     * 
     *  @property globalLocationNumber
     *  @type Text
     */
    globalLocationNumber = null;
    /**
     *  Schema.org/reviews
     *  Review of the item.
     * 
     *  @property reviews
     *  @type Review
     */
    reviews = null;
    /**
     *  Schema.org/members
     *  A member of this organization.
     * 
     *  @property members
     *  @type Organization
     */
    members = null;
    /**
     *  Schema.org/aggregateRating
     *  The overall rating, based on a collection of reviews or ratings, of the item.
     * 
     *  @property aggregateRating
     *  @type AggregateRating
     */
    aggregateRating = null;
    /**
     *  Schema.org/duns
     *  The Dun & Bradstreet DUNS number for identifying an organization or business person.
     * 
     *  @property duns
     *  @type Text
     */
    duns = null;
    /**
     *  Schema.org/taxID
     *  The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
     * 
     *  @property taxID
     *  @type Text
     */
    taxID = null;
    /**
     *  Schema.org/award
     *  An award won by or for this item.
     * 
     *  @property award
     *  @type Text
     */
    award = null;
    /**
     *  Schema.org/makesOffer
     *  A pointer to products or services offered by the organization or person.
     * 
     *  @property makesOffer
     *  @type Offer
     */
    makesOffer = null;
    /**
     *  Schema.org/contactPoints
     *  A contact point for a person or organization.
     * 
     *  @property contactPoints
     *  @type ContactPoint
     */
    contactPoints = null;
    /**
     *  Schema.org/awards
     *  Awards won by or for this item.
     * 
     *  @property awards
     *  @type Text
     */
    awards = null;
    /**
     *  Schema.org/seeks
     *  A pointer to products or services sought by the organization or person (demand).
     * 
     *  @property seeks
     *  @type Demand
     */
    seeks = null;
    /**
     *  Schema.org/member
     *  A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
     * 
     *  @property member
     *  @type Organization
     */
    member = null;
    /**
     *  Schema.org/founders
     *  A person who founded this organization.
     * 
     *  @property founders
     *  @type Person
     */
    founders = null;
    /**
     *  Schema.org/alumni
     *  Alumni of an organization.
     * 
     *  @property alumni
     *  @type Person
     */
    alumni = null;
    /**
     *  Schema.org/dissolutionDate
     *  The date that this organization was dissolved.
     * 
     *  @property dissolutionDate
     *  @type Date
     */
    dissolutionDate = null;
    /**
     *  Schema.org/events
     *  Upcoming or past events associated with this place or organization.
     * 
     *  @property events
     *  @type SchemaEvent
     */
    events = null;
    /**
     *  Schema.org/logo
     *  An associated logo.
     * 
     *  @property logo
     *  @type ImageObject
     */
    logo = null;
    /**
     *  Schema.org/employees
     *  People working for this organization.
     * 
     *  @property employees
     *  @type Person
     */
    employees = null;
    /**
     *  Schema.org/telephone
     *  The telephone number.
     * 
     *  @property telephone
     *  @type Text
     */
    telephone = null;
    /**
     *  Schema.org/email
     *  Email address.
     * 
     *  @property email
     *  @type Text
     */
    email = null;
    /**
     *  Schema.org/department
     *  A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
     * 
     *  @property department
     *  @type Organization
     */
    department = null;
    /**
     *  Schema.org/contactPoint
     *  A contact point for a person or organization.
     * 
     *  @property contactPoint
     *  @type ContactPoint
     */
    contactPoint = null;
    /**
     *  Schema.org/parentOrganization
     *  The larger organization that this organization is a [[subOrganization]] of, if any.
     * 
     *  @property parentOrganization
     *  @type Organization
     */
    parentOrganization = null;
    /**
     *  Schema.org/legalName
     *  The official name of the organization, e.g. the registered company name.
     * 
     *  @property legalName
     *  @type Text
     */
    legalName = null;
    /**
     *  Schema.org/foundingDate
     *  The date that this organization was founded.
     * 
     *  @property foundingDate
     *  @type Date
     */
    foundingDate = null;
    /**
     *  Schema.org/employee
     *  Someone working for this organization.
     * 
     *  @property employee
     *  @type Person
     */
    employee = null;
    /**
     *  Schema.org/numberOfEmployees
     *  The number of employees in an organization e.g. business.
     * 
     *  @property numberOfEmployees
     *  @type QuantitativeValue
     */
    numberOfEmployees = null;
    /**
     *  Schema.org/naics
     *  The North American Industry Classification System (NAICS) code for a particular organization or business person.
     * 
     *  @property naics
     *  @type Text
     */
    naics = null;
    /**
     *  Schema.org/hasPOS
     *  Points-of-Sales operated by the organization or person.
     * 
     *  @property hasPOS
     *  @type Place
     */
    hasPOS = null;
    /**
     *  Schema.org/review
     *  A review of the item.
     * 
     *  @property review
     *  @type Review
     */
    review = null;
    /**
     *  Schema.org/foundingLocation
     *  The place where the Organization was founded.
     * 
     *  @property foundingLocation
     *  @type Place
     */
    foundingLocation = null;
    /**
     *  Schema.org/owns
     *  Products owned by the organization or person.
     * 
     *  @property owns
     *  @type OwnershipInfo
     */
    owns = null;
    /**
     *  Schema.org/event
     *  Upcoming or past event associated with this place, organization, or action.
     * 
     *  @property event
     *  @type SchemaEvent
     */
    event = null;
    /**
     *  Schema.org/founder
     *  A person who founded this organization.
     * 
     *  @property founder
     *  @type Person
     */
    founder = null;
    /**
     *  Schema.org/sponsor
     *  A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     * 
     *  @property sponsor
     *  @type Organization
     */
    sponsor = null;
    /**
     *  Schema.org/isicV4
     *  The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
     * 
     *  @property isicV4
     *  @type Text
     */
    isicV4 = null;
    /**
     *  Schema.org/location
     *  The location of for example where the event is happening, an organization is located, or where an action takes place.
     * 
     *  @property location
     *  @type PostalAddress
     */
    location = null;
    /**
     *  Schema.org/brand
     *  The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
     * 
     *  @property brand
     *  @type Organization
     */
    brand = null;
    /**
     *  Schema.org/vatID
     *  The Value-added Tax ID of the organization or person.
     * 
     *  @property vatID
     *  @type Text
     */
    vatID = null;
    /**
     *  Schema.org/leiCode
     *  An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
     * 
     *  @property leiCode
     *  @type Text
     */
    leiCode = null;
    /**
     *  Schema.org/faxNumber
     *  The fax number.
     * 
     *  @property faxNumber
     *  @type Text
     */
    faxNumber = null;
    /**
     *  Schema.org/areaServed
     *  The geographic area where a service or offered item is provided.
     * 
     *  @property areaServed
     *  @type Place
     */
    areaServed = null;
}, {serviceArea: "GeoShape", address: "PostalAddress", funder: "Person", memberOf: "Organization", subOrganization: "Organization", hasOfferCatalog: "OfferCatalog", reviews: "Review", members: "Organization", aggregateRating: "AggregateRating", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", member: "Organization", founders: "Person", alumni: "Person", events: "SchemaEvent", logo: "ImageObject", employees: "Person", department: "Organization", contactPoint: "ContactPoint", parentOrganization: "Organization", employee: "Person", numberOfEmployees: "QuantitativeValue", hasPOS: "Place", review: "Review", foundingLocation: "Place", owns: "OwnershipInfo", event: "SchemaEvent", founder: "Person", sponsor: "Organization", location: "PostalAddress", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
