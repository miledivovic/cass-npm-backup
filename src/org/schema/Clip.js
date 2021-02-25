/**
 *  Schema.org/Clip
 *  A short TV or radio program or a segment/part of a program.
 * 
 *  @author schema.org
 *  @class Clip
 *  @module org.schema
 *  @extends CreativeWork
 */
var Clip = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "Clip";
};
Clip = stjs.extend(Clip, CreativeWork, [], function(constructor, prototype) {
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
     *  Schema.org/partOfEpisode
     *  The episode to which this clip belongs.
     * 
     *  @property partOfEpisode
     *  @type Episode
     */
    prototype.partOfEpisode = null;
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
     *  Schema.org/director
     *  A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property director
     *  @type Person
     */
    prototype.director = null;
    /**
     *  Schema.org/actors
     *  An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property actors
     *  @type Person
     */
    prototype.actors = null;
    /**
     *  Schema.org/clipNumber
     *  Position of the clip within an ordered group of clips.
     * 
     *  @property clipNumber
     *  @type Integer
     */
    prototype.clipNumber = null;
}, {actor: "Person", partOfSeries: "CreativeWorkSeries", partOfEpisode: "Episode", partOfSeason: "CreativeWorkSeason", musicBy: "Person", directors: "Person", director: "Person", actors: "Person", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
