/**
 *  www.w3.org/2004/02/skos/core/OrderedCollection
 *  An ordered collection of concepts, where both the grouping and the ordering are meaningful.
 *  Ordered collections can be used where you would like a set of concepts to be displayed in a specific order, and optionally under a 'node label'.
 *  @author w3.org
 *  @class OrderedCollection
 *  @module org.w3.skos
 *  @extends Collection
 */
var OrderedCollection = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    Collection.call(this);
    this.context = "https://schema.cassproject.org/0.4/skos/";
    this.type = "OrderedCollection";
};
OrderedCollection = stjs.extend(OrderedCollection, Collection, [], function(constructor, prototype) {
    /**
     *  www.w3.org/2004/02/skos/core/memberList
     *  Relates an ordered collection to the RDF list containing its members.
     *  @property memberList
     *  @type List
     */
    memberList = null;
}, {memberList: {name: "Array", arguments: ["Object"]}, member: {name: "Array", arguments: ["Object"]}, owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
