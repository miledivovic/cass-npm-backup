/**
 *  Schema.org/BedDetails
 *  An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also [[BedType]] (under development).
 * 
 *  @author schema.org
 *  @class BedDetails
 *  @module org.schema
 *  @extends Intangible
 */
var BedDetails = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "BedDetails";
};
BedDetails = stjs.extend(BedDetails, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/numberOfBeds
     *  The quantity of the given bed type available in the HotelRoom, Suite, House, or Apartment.
     * 
     *  @property numberOfBeds
     *  @type Number
     */
    prototype.numberOfBeds = null;
    /**
     *  Schema.org/typeOfBed
     *  The type of bed to which the BedDetail refers, i.e. the type of bed available in the quantity indicated by quantity.
     * 
     *  @property typeOfBed
     *  @type Text
     */
    prototype.typeOfBed = null;
}, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
