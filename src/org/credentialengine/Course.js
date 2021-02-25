/**
 *  credentialengine.org/Course
 *  Structured sequence of one or more educational activities that aims to develop a prescribed set of knowledge, competence or ability of learners.
 *  @author credentialengine.org
 *  @class Course
 *  @module org.credentialengine
 *  @extends LearningOpportunity
 */
var Course = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    LearningOpportunity.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "Course";
};
Course = stjs.extend(Course, LearningOpportunity, [], null, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
