/**
 *  www.w3.org/2004/02/skos/core/Collection
 *  A meaningful collection of concepts.
 *  Labelled collections can be used where you would like a set of concepts to be displayed under a 'node label' in the hierarchy.
 *  @author w3.org
 *  @class Collection
 *  @module org.w3.skos
 */
var Collection = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "https://schema.cassproject.org/0.4/skos/", "Collection");
};
Collection = stjs.extend(Collection, EcRemoteLinkedData, [], function(constructor, prototype) {
    /**
     *  www.w3.org/2004/02/skos/core/member
     *  Relates a collection to one of its members.
     *  @property member
     *  @type N0e403dc85fe548d1b3d2f3d1ded36d20
     */
    prototype.member = null;
}, {member: {name: "Array", arguments: ["Object"]}, owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
