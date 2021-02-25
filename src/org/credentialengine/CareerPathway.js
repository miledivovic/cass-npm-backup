/**
 *  credentialengine.org/CareerPathway
 *  Integrated, sequentially ordered collection of credentials, programs, experiences, and services intended to develop technical, academic, and employability skills in a cluster of occupations that share common skills, knowledge, and interests.
 *  @author credentialengine.org
 *  @class CareerPathway
 *  @module org.credentialengine
 */
var CareerPathway = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "CareerPathway");
};
CareerPathway = stjs.extend(CareerPathway, EcRemoteLinkedData, [], null, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
