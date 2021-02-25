/**
 *  Schema.org/BoardingPolicyType
 *  A type of boarding policy used by an airline.
 * 
 *  @author schema.org
 *  @class BoardingPolicyType
 *  @module org.schema
 *  @extends Enumeration
 */
var BoardingPolicyType = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "BoardingPolicyType";
};
BoardingPolicyType = stjs.extend(BoardingPolicyType, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
