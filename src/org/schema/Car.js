/**
 *  Schema.org/Car
 *  A car is a wheeled, self-powered motor vehicle used for transportation.
 * 
 *  @author schema.org
 *  @class Car
 *  @module org.schema
 *  @extends Vehicle
 */
var Car = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Vehicle.call(this);
    this.context = "http://schema.org/";
    this.type = "Car";
};
Car = stjs.extend(Car, Vehicle, [], null, {mileageFromOdometer: "QuantitativeValue", cargoVolume: "QuantitativeValue", steeringPosition: "SteeringPositionValue", vehicleSeatingCapacity: "QuantitativeValue", vehicleEngine: "EngineSpecification", fuelConsumption: "QuantitativeValue", numberOfPreviousOwners: "QuantitativeValue", fuelEfficiency: "QuantitativeValue", numberOfAxles: "QuantitativeValue", driveWheelConfiguration: "DriveWheelConfigurationValue", manufacturer: "Organization", audience: "Audience", height: "Distance", reviews: "Review", aggregateRating: "AggregateRating", isConsumableFor: "Product", offers: "Offer", width: "Distance", additionalProperty: "PropertyValue", isAccessoryOrSparePartFor: "Product", logo: "ImageObject", weight: "QuantitativeValue", depth: "Distance", isSimilarTo: "Product", isRelatedTo: "Product", review: "Review", itemCondition: "OfferItemCondition", brand: "Organization", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
