/**
 *  Schema.org/OwnershipInfo
 *  A structured value providing information about when a certain organization or person owned a certain product.
 * 
 *  @author schema.org
 *  @class OwnershipInfo
 *  @module org.schema
 *  @extends StructuredValue
 */
var OwnershipInfo = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    StructuredValue.call(this);
    this.context = "http://schema.org/";
    this.type = "OwnershipInfo";
};
OwnershipInfo = stjs.extend(OwnershipInfo, StructuredValue, [], function(constructor, prototype) {
    /**
     *  Schema.org/typeOfGood
     *  The product that this structured value is referring to.
     * 
     *  @property typeOfGood
     *  @type Service
     */
    typeOfGood = null;
    /**
     *  Schema.org/ownedFrom
     *  The date and time of obtaining the product.
     * 
     *  @property ownedFrom
     *  @type DateTime
     */
    ownedFrom = null;
    /**
     *  Schema.org/ownedThrough
     *  The date and time of giving up ownership on the product.
     * 
     *  @property ownedThrough
     *  @type DateTime
     */
    ownedThrough = null;
    /**
     *  Schema.org/acquiredFrom
     *  The organization or person from which the product was acquired.
     * 
     *  @property acquiredFrom
     *  @type Person
     */
    acquiredFrom = null;
}, {typeOfGood: "Service", acquiredFrom: "Person", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
