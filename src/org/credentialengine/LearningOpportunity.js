/**
 *  credentialengine.org/LearningOpportunity
 *  Structured and unstructured learning and development opportunities based in direct experience, formal and informal study, observation, and involvement in discourse and practice.
 *  Examples of learning opportunities include education and training programs and classes, courses of study, apprenticeship or work experience programs, or other structured experiences intended to serve as educational or training events.
 *  @author credentialengine.org
 *  @class LearningOpportunity
 *  @module org.credentialengine
 */
var LearningOpportunity = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "LearningOpportunity");
};
LearningOpportunity = stjs.extend(LearningOpportunity, EcRemoteLinkedData, [], null, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
