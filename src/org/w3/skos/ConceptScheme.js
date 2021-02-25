/**
 *  www.w3.org/2004/02/skos/core/ConceptScheme
 *  A set of concepts, optionally including statements about semantic relationships between those concepts.
 *  A concept scheme may be defined to include concepts from different sources.
 *  @author w3.org
 *  @class ConceptScheme
 *  @module org.w3.skos
 */
var ConceptScheme = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "https://schema.cassproject.org/0.4/skos/", "ConceptScheme");
};
ConceptScheme = stjs.extend(ConceptScheme, EcRemoteLinkedData, [], function(constructor, prototype) {
    constructor.TYPE_0_1 = "http://schema.cassproject.org/0.3/skos/ConceptScheme";
    constructor.TYPE_0_2 = "https://schema.cassproject.org/0.3/skos/ConceptScheme";
    constructor.TYPE_0_3 = "https://schema.cassproject.org/0.4/skos/ConceptScheme";
    constructor.myType = ConceptScheme.TYPE_0_3;
    /**
     *  www.w3.org/2004/02/skos/core/hasTopConcept
     *  Relates, by convention, a concept scheme to a concept which is topmost in the broader/narrower concept hierarchies for that scheme, providing an entry point to these hierarchies.
     *  @property hasTopConcept
     *  @type Concept
     */
    prototype.hasTopConcept = null;
    prototype.upgrade = function() {
        EcRemoteLinkedData.prototype.upgrade.call(this);
        if (ConceptScheme.TYPE_0_1.equals(this.getFullType())) {
            this.setContextAndType("https://schema.cassproject.org/0.3/skos", ConceptScheme.TYPE_0_2);
        }
        if (ConceptScheme.TYPE_0_2.equals(this.getFullType())) {
            this.setContextAndType("https://schema.cassproject.org/0.4/skos", ConceptScheme.TYPE_0_3);
        }
    };
    prototype.getTypes = function() {
        var a = new Array();
        a.push(ConceptScheme.TYPE_0_3);
        a.push(ConceptScheme.TYPE_0_2);
        a.push(ConceptScheme.TYPE_0_1);
        return a;
    };
}, {hasTopConcept: "Concept", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
