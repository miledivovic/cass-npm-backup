/**
 *  Schema.org/MusicComposition
 *  A musical composition.
 * 
 *  @author schema.org
 *  @class MusicComposition
 *  @module org.schema
 *  @extends CreativeWork
 */
var MusicComposition = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "MusicComposition";
};
MusicComposition = stjs.extend(MusicComposition, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/musicCompositionForm
     *  The type of composition (e.g. overture, sonata, symphony, etc.).
     * 
     *  @property musicCompositionForm
     *  @type Text
     */
    musicCompositionForm = null;
    /**
     *  Schema.org/includedComposition
     *  Smaller compositions included in this work (e.g. a movement in a symphony).
     * 
     *  @property includedComposition
     *  @type MusicComposition
     */
    includedComposition = null;
    /**
     *  Schema.org/lyricist
     *  The person who wrote the words.
     * 
     *  @property lyricist
     *  @type Person
     */
    lyricist = null;
    /**
     *  Schema.org/recordedAs
     *  An audio recording of the work.
     * 
     *  @property recordedAs
     *  @type MusicRecording
     */
    recordedAs = null;
    /**
     *  Schema.org/firstPerformance
     *  The date and place the work was first performed.
     * 
     *  @property firstPerformance
     *  @type SchemaEvent
     */
    firstPerformance = null;
    /**
     *  Schema.org/musicArrangement
     *  An arrangement derived from the composition.
     * 
     *  @property musicArrangement
     *  @type MusicComposition
     */
    musicArrangement = null;
    /**
     *  Schema.org/lyrics
     *  The words in the song.
     * 
     *  @property lyrics
     *  @type CreativeWork
     */
    lyrics = null;
    /**
     *  Schema.org/iswcCode
     *  The International Standard Musical Work Code for the composition.
     * 
     *  @property iswcCode
     *  @type Text
     */
    iswcCode = null;
    /**
     *  Schema.org/composer
     *  The person or organization who wrote a composition, or who is the composer of a work performed at some event.
     * 
     *  @property composer
     *  @type Organization
     */
    composer = null;
    /**
     *  Schema.org/musicalKey
     *  The key, mode, or scale this composition uses.
     * 
     *  @property musicalKey
     *  @type Text
     */
    musicalKey = null;
}, {includedComposition: "MusicComposition", lyricist: "Person", recordedAs: "MusicRecording", firstPerformance: "SchemaEvent", musicArrangement: "MusicComposition", lyrics: "CreativeWork", composer: "Organization", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
