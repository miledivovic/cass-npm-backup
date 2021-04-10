/**
 *  Schema.org/Vehicle
 *  A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.
 * 
 *  @author schema.org
 *  @class Vehicle
 *  @module org.schema
 *  @extends Product
 */
var Vehicle = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Product.call(this);
    this.context = "http://schema.org/";
    this.type = "Vehicle";
};
Vehicle = stjs.extend(Vehicle, Product, [], function(constructor, prototype) {
    /**
     *  Schema.org/vehicleSpecialUsage
     *  Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school, or as a taxi. The legislation in many countries requires this information to be revealed when offering a car for sale.
     * 
     *  @property vehicleSpecialUsage
     *  @type Text
     */
    vehicleSpecialUsage = null;
    /**
     *  Schema.org/productionDate
     *  The date of production of the item, e.g. vehicle.
     * 
     *  @property productionDate
     *  @type Date
     */
    productionDate = null;
    /**
     *  Schema.org/numberOfForwardGears
     *  The total number of forward gears available for the transmission system of the vehicle.\n\nTypical unit code(s): C62
     * 
     *  @property numberOfForwardGears
     *  @type Number
     */
    numberOfForwardGears = null;
    /**
     *  Schema.org/mileageFromOdometer
     *  The total distance travelled by the particular vehicle since its initial production, as read from its odometer.\n\nTypical unit code(s): KMT for kilometers, SMI for statute miles
     * 
     *  @property mileageFromOdometer
     *  @type QuantitativeValue
     */
    mileageFromOdometer = null;
    /**
     *  Schema.org/cargoVolume
     *  The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.\n\nTypical unit code(s): LTR for liters, FTQ for cubic foot/feet\n\nNote: You can use [[minValue]] and [[maxValue]] to indicate ranges.
     * 
     *  @property cargoVolume
     *  @type QuantitativeValue
     */
    cargoVolume = null;
    /**
     *  Schema.org/vehicleInteriorColor
     *  The color or color combination of the interior of the vehicle.
     * 
     *  @property vehicleInteriorColor
     *  @type Text
     */
    vehicleInteriorColor = null;
    /**
     *  Schema.org/steeringPosition
     *  The position of the steering wheel or similar device (mostly for cars).
     * 
     *  @property steeringPosition
     *  @type SteeringPositionValue
     */
    steeringPosition = null;
    /**
     *  Schema.org/vehicleSeatingCapacity
     *  The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.\n\nTypical unit code(s): C62 for persons.
     * 
     *  @property vehicleSeatingCapacity
     *  @type QuantitativeValue
     */
    vehicleSeatingCapacity = null;
    /**
     *  Schema.org/vehicleEngine
     *  Information about the engine or engines of the vehicle.
     * 
     *  @property vehicleEngine
     *  @type EngineSpecification
     */
    vehicleEngine = null;
    /**
     *  Schema.org/vehicleModelDate
     *  The release date of a vehicle model (often used to differentiate versions of the same make and model).
     * 
     *  @property vehicleModelDate
     *  @type Date
     */
    vehicleModelDate = null;
    /**
     *  Schema.org/numberOfDoors
     *  The number of doors.\n\nTypical unit code(s): C62
     * 
     *  @property numberOfDoors
     *  @type Number
     */
    numberOfDoors = null;
    /**
     *  Schema.org/vehicleConfiguration
     *  A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.
     * 
     *  @property vehicleConfiguration
     *  @type Text
     */
    vehicleConfiguration = null;
    /**
     *  Schema.org/fuelType
     *  The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.
     * 
     *  @property fuelType
     *  @type Text
     */
    fuelType = null;
    /**
     *  Schema.org/vehicleIdentificationNumber
     *  The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles.
     * 
     *  @property vehicleIdentificationNumber
     *  @type Text
     */
    vehicleIdentificationNumber = null;
    /**
     *  Schema.org/fuelConsumption
     *  The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).\n\n* Note 1: There are unfortunately no standard unit codes for liters per 100 km.  Use [[unitText]] to indicate the unit of measurement, e.g. L/100 km.\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\n* Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use [[valueReference]] to link the value for the fuel consumption to another value.
     * 
     *  @property fuelConsumption
     *  @type QuantitativeValue
     */
    fuelConsumption = null;
    /**
     *  Schema.org/numberOfPreviousOwners
     *  The number of owners of the vehicle, including the current one.\n\nTypical unit code(s): C62
     * 
     *  @property numberOfPreviousOwners
     *  @type QuantitativeValue
     */
    numberOfPreviousOwners = null;
    /**
     *  Schema.org/fuelEfficiency
     *  The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).\n\n* Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use [[unitText]] to indicate the unit of measurement, e.g. mpg or km/L.\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\n* Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use [[valueReference]] to link the value for the fuel economy to another value.
     * 
     *  @property fuelEfficiency
     *  @type QuantitativeValue
     */
    fuelEfficiency = null;
    /**
     *  Schema.org/numberOfAxles
     *  The number of axles.\n\nTypical unit code(s): C62
     * 
     *  @property numberOfAxles
     *  @type QuantitativeValue
     */
    numberOfAxles = null;
    /**
     *  Schema.org/vehicleInteriorType
     *  The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience.
     * 
     *  @property vehicleInteriorType
     *  @type Text
     */
    vehicleInteriorType = null;
    /**
     *  Schema.org/numberOfAirbags
     *  The number or type of airbags in the vehicle.
     * 
     *  @property numberOfAirbags
     *  @type Text
     */
    numberOfAirbags = null;
    /**
     *  Schema.org/vehicleTransmission
     *  The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) ("gearbox" for cars).
     * 
     *  @property vehicleTransmission
     *  @type Text
     */
    vehicleTransmission = null;
    /**
     *  Schema.org/dateVehicleFirstRegistered
     *  The date of the first registration of the vehicle with the respective public authorities.
     * 
     *  @property dateVehicleFirstRegistered
     *  @type Date
     */
    dateVehicleFirstRegistered = null;
    /**
     *  Schema.org/purchaseDate
     *  The date the item e.g. vehicle was purchased by the current owner.
     * 
     *  @property purchaseDate
     *  @type Date
     */
    purchaseDate = null;
    /**
     *  Schema.org/knownVehicleDamages
     *  A textual description of known damages, both repaired and unrepaired.
     * 
     *  @property knownVehicleDamages
     *  @type Text
     */
    knownVehicleDamages = null;
    /**
     *  Schema.org/driveWheelConfiguration
     *  The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain.
     * 
     *  @property driveWheelConfiguration
     *  @type DriveWheelConfigurationValue
     */
    driveWheelConfiguration = null;
}, {mileageFromOdometer: "QuantitativeValue", cargoVolume: "QuantitativeValue", steeringPosition: "SteeringPositionValue", vehicleSeatingCapacity: "QuantitativeValue", vehicleEngine: "EngineSpecification", fuelConsumption: "QuantitativeValue", numberOfPreviousOwners: "QuantitativeValue", fuelEfficiency: "QuantitativeValue", numberOfAxles: "QuantitativeValue", driveWheelConfiguration: "DriveWheelConfigurationValue", manufacturer: "Organization", audience: "Audience", height: "Distance", reviews: "Review", aggregateRating: "AggregateRating", isConsumableFor: "Product", offers: "Offer", width: "Distance", additionalProperty: "PropertyValue", isAccessoryOrSparePartFor: "Product", logo: "ImageObject", weight: "QuantitativeValue", depth: "Distance", isSimilarTo: "Product", isRelatedTo: "Product", review: "Review", itemCondition: "OfferItemCondition", brand: "Organization", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
