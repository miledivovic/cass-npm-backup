/**
 *  credentialengine.org/AlignmentMap
 *  An entity comprised of a set of alignment or mapping assertions between two existing entities such as mapping a certificate providing advanced standing to a degree.
 *  Alignment maps provide the means for parties to assert sets of alignments between already existing entities created by themselves or other parties--e.g., a 3rd party mapping of a learning resource owned by one party to a credential owned by another; or, mapping a military occupational experience or Military Occupational Specialty (MOS code) as advanced standing to a course or credential.
 *  @author credentialengine.org
 *  @class AlignmentMap
 *  @module org.credentialengine
 */
var AlignmentMap = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "AlignmentMap");
};
AlignmentMap = stjs.extend(AlignmentMap, EcRemoteLinkedData, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/hasStatement
     *  Alignment assertion belonging to the alignment map.
     *  @property hasStatement
     *  @type Statement
     */
    prototype.hasStatement = null;
}, {hasStatement: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
