/**
 *  www.w3.org/2004/02/skos/core/Concept
 *  An idea or notion; a unit of thought.
 *  @author w3.org
 *  @class Concept
 *  @module org.w3.skos
 */
var Concept = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "https://schema.cassproject.org/0.4/skos/", "Concept");
};
Concept = stjs.extend(Concept, EcRemoteLinkedData, [], function(constructor, prototype) {
    constructor.TYPE_0_1 = "http://schema.cassproject.org/0.3/skos/Concept";
    constructor.TYPE_0_2 = "https://schema.cassproject.org/0.3/skos/Concept";
    constructor.TYPE_0_3 = "https://schema.cassproject.org/0.4/skos/Concept";
    constructor.myType = Concept.TYPE_0_3;
    /**
     *  www.w3.org/2004/02/skos/core/topConceptOf
     *  Relates a concept to the concept scheme that it is a top level concept of.
     *  @property topConceptOf
     *  @type ConceptScheme
     */
    prototype.topConceptOf = null;
    /**
     *  www.w3.org/2004/02/skos/core/semanticRelation
     *  Links a concept to a concept related by meaning.
     *  @property semanticRelation
     *  @type Concept
     */
    prototype.semanticRelation = null;
    prototype.upgrade = function() {
        EcRemoteLinkedData.prototype.upgrade.call(this);
        if (Concept.TYPE_0_1.equals(this.getFullType())) {
            this.setContextAndType("https://schema.cassproject.org/0.3/skos", Concept.TYPE_0_2);
        }
        if (Concept.TYPE_0_2.equals(this.getFullType())) {
            this.setContextAndType("https://schema.cassproject.org/0.4/skos", Concept.TYPE_0_3);
        }
    };
    prototype.getTypes = function() {
        var a = new Array();
        a.push(Concept.TYPE_0_3);
        a.push(Concept.TYPE_0_2);
        a.push(Concept.TYPE_0_1);
        return a;
    };
}, {topConceptOf: "ConceptScheme", semanticRelation: "Concept", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
