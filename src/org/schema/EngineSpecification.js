/**
 *  Schema.org/EngineSpecification
 *  Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities.
 * 
 *  @author schema.org
 *  @class EngineSpecification
 *  @module org.schema
 *  @extends StructuredValue
 */
var EngineSpecification = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    StructuredValue.call(this);
    this.context = "http://schema.org/";
    this.type = "EngineSpecification";
};
EngineSpecification = stjs.extend(EngineSpecification, StructuredValue, [], function(constructor, prototype) {
    /**
     *  Schema.org/fuelType
     *  The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.
     * 
     *  @property fuelType
     *  @type Text
     */
    fuelType = null;
}, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
