/**
 *  Schema.org/Episode
 *  A media episode (e.g. TV, radio, video game) which can be part of a series or season.
 * 
 *  @author schema.org
 *  @class Episode
 *  @module org.schema
 *  @extends CreativeWork
 */
var Episode = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "Episode";
};
Episode = stjs.extend(Episode, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/actor
     *  An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property actor
     *  @type Person
     */
    prototype.actor = null;
    /**
     *  Schema.org/partOfSeries
     *  The series to which this episode or season belongs.
     * 
     *  @property partOfSeries
     *  @type CreativeWorkSeries
     */
    prototype.partOfSeries = null;
    /**
     *  Schema.org/trailer
     *  The trailer of a movie or tv/radio series, season, episode, etc.
     * 
     *  @property trailer
     *  @type VideoObject
     */
    prototype.trailer = null;
    /**
     *  Schema.org/partOfSeason
     *  The season to which this episode belongs.
     * 
     *  @property partOfSeason
     *  @type CreativeWorkSeason
     */
    prototype.partOfSeason = null;
    /**
     *  Schema.org/musicBy
     *  The composer of the soundtrack.
     * 
     *  @property musicBy
     *  @type Person
     */
    prototype.musicBy = null;
    /**
     *  Schema.org/directors
     *  A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property directors
     *  @type Person
     */
    prototype.directors = null;
    /**
     *  Schema.org/episodeNumber
     *  Position of the episode within an ordered group of episodes.
     * 
     *  @property episodeNumber
     *  @type Integer
     */
    prototype.episodeNumber = null;
    /**
     *  Schema.org/director
     *  A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property director
     *  @type Person
     */
    prototype.director = null;
    /**
     *  Schema.org/productionCompany
     *  The production company or studio responsible for the item e.g. series, video game, episode etc.
     * 
     *  @property productionCompany
     *  @type Organization
     */
    prototype.productionCompany = null;
    /**
     *  Schema.org/actors
     *  An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property actors
     *  @type Person
     */
    prototype.actors = null;
}, {actor: "Person", partOfSeries: "CreativeWorkSeries", trailer: "VideoObject", partOfSeason: "CreativeWorkSeason", musicBy: "Person", directors: "Person", director: "Person", productionCompany: "Organization", actors: "Person", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
