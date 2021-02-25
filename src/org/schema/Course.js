/**
 *  Schema.org/Course
 *  A description of an educational course which may be offered as distinct instances at which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners.
 * 
 *  @author schema.org
 *  @class Course
 *  @module org.schema
 *  @extends CreativeWork
 */
var Course = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "Course";
};
Course = stjs.extend(Course, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/courseCode
     *  The identifier for the [[Course]] used by the course [[provider]] (e.g. CS101 or 6.001).
     * 
     *  @property courseCode
     *  @type Text
     */
    prototype.courseCode = null;
    /**
     *  Schema.org/coursePrerequisites
     *  Requirements for taking the Course. May be completion of another [[Course]] or a textual description like "permission of instructor". Requirements may be a pre-requisite competency, referenced using [[AlignmentObject]].
     * 
     *  @property coursePrerequisites
     *  @type Text
     */
    prototype.coursePrerequisites = null;
    /**
     *  Schema.org/hasCourseInstance
     *  An offering of the course at a specific time and place or through specific media or mode of study or to a specific section of students.
     * 
     *  @property hasCourseInstance
     *  @type CourseInstance
     */
    prototype.hasCourseInstance = null;
}, {hasCourseInstance: "CourseInstance", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
