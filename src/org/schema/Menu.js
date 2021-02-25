/**
 *  Schema.org/Menu
 *  A structured representation of food or drink items available from a FoodEstablishment.
 * 
 *  @author schema.org
 *  @class Menu
 *  @module org.schema
 *  @extends CreativeWork
 */
var Menu = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "Menu";
};
Menu = stjs.extend(Menu, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/hasMenuItem
     *  A food or drink item contained in a menu or menu section.
     * 
     *  @property hasMenuItem
     *  @type MenuItem
     */
    prototype.hasMenuItem = null;
    /**
     *  Schema.org/hasMenuSection
     *  A subgrouping of the menu (by dishes, course, serving time period, etc.).
     * 
     *  @property hasMenuSection
     *  @type MenuSection
     */
    prototype.hasMenuSection = null;
}, {hasMenuItem: "MenuItem", hasMenuSection: "MenuSection", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
