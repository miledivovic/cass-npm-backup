/**
 *  Schema.org/SteeringPositionValue
 *  A value indicating a steering position.
 * 
 *  @author schema.org
 *  @class SteeringPositionValue
 *  @module org.schema
 *  @extends QualitativeValue
 */
var SteeringPositionValue = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    QualitativeValue.call(this);
    this.context = "http://schema.org/";
    this.type = "SteeringPositionValue";
};
SteeringPositionValue = stjs.extend(SteeringPositionValue, QualitativeValue, [], null, {greater: "QualitativeValue", equal: "QualitativeValue", nonEqual: "QualitativeValue", additionalProperty: "PropertyValue", lesser: "QualitativeValue", valueReference: "StructuredValue", lesserOrEqual: "QualitativeValue", greaterOrEqual: "QualitativeValue", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
