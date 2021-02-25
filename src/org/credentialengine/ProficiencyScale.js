/**
 *  credentialengine.org/ProficiencyScale
 *  The class of structured profiles describing discrete levels of expertise and performance mastery.
 *  Proficiency scales define levels of performance (what a person does) as distinct from knowledge of specific information (what a person knows) and outline tasks a person can manage and the skills necessary to progressively accomplish explicit competencies at increasing levels of complexity. Proficiency scales: (1) assist in making judgments about the kinds of tasks related to a competency that a person is able to perform; and (2) to compare the abilities of different persons with regard to achievement of those competencies at different levels.
 *  @author credentialengine.org
 *  @class ProficiencyScale
 *  @module org.credentialengine
 *  @extends EducationalFramework
 */
var ProficiencyScale = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "ProficiencyScale");
};
ProficiencyScale = stjs.extend(ProficiencyScale, EcRemoteLinkedData, [], null, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
