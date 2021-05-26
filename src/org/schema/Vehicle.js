const schema = {};
schema.Product = require("./Product.js");
/**
 * Schema.org/Vehicle
 * A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.
 *
 * @author schema.org
 * @class Vehicle
 * @module org.schema
 * @extends Product
 */
module.exports = class Vehicle extends schema.Product {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Vehicle");
	}

	/**
	 * Schema.org/vehicleModelDate
	 * The release date of a vehicle model (often used to differentiate versions of the same make and model).
	 *
	 * @property vehicleModelDate
	 * @type Date
	 */
	vehicleModelDate;

	/**
	 * Schema.org/payload
	 * The permitted weight of passengers and cargo, EXCLUDING the weight of the empty vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: Many databases specify the permitted TOTAL weight instead, which is the sum of [[weight]] and [[payload]]\n* Note 2: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 3: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 4: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
	 *
	 * @property payload
	 * @type QuantitativeValue
	 */
	payload;

	/**
	 * Schema.org/vehicleTransmission
	 * The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) ("gearbox" for cars).
	 *
	 * @property vehicleTransmission
	 * @type QualitativeValue
	 */
	vehicleTransmission;

	/**
	 * Schema.org/numberOfDoors
	 * The number of doors.\n\nTypical unit code(s): C62
	 *
	 * @property numberOfDoors
	 * @type QuantitativeValue
	 */
	numberOfDoors;

	/**
	 * Schema.org/modelDate
	 * The release date of a vehicle model (often used to differentiate versions of the same make and model).
	 *
	 * @property modelDate
	 * @type Date
	 */
	modelDate;

	/**
	 * Schema.org/fuelEfficiency
	 * The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).\n\n* Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use [[unitText]] to indicate the unit of measurement, e.g. mpg or km/L.\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\n* Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use [[valueReference]] to link the value for the fuel economy to another value.
	 *
	 * @property fuelEfficiency
	 * @type QuantitativeValue
	 */
	fuelEfficiency;

	/**
	 * Schema.org/fuelType
	 * The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.
	 *
	 * @property fuelType
	 * @type Text
	 */
	fuelType;

	/**
	 * Schema.org/bodyType
	 * Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.).
	 *
	 * @property bodyType
	 * @type QualitativeValue
	 */
	bodyType;

	/**
	 * Schema.org/wheelbase
	 * The distance between the centers of the front and rear wheels.\n\nTypical unit code(s): CMT for centimeters, MTR for meters, INH for inches, FOT for foot/feet
	 *
	 * @property wheelbase
	 * @type QuantitativeValue
	 */
	wheelbase;

	/**
	 * Schema.org/vehicleInteriorType
	 * The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience.
	 *
	 * @property vehicleInteriorType
	 * @type Text
	 */
	vehicleInteriorType;

	/**
	 * Schema.org/tongueWeight
	 * The permitted vertical load (TWR) of a trailer attached to the vehicle. Also referred to as Tongue Load Rating (TLR) or Vertical Load Rating (VLR)\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
	 *
	 * @property tongueWeight
	 * @type QuantitativeValue
	 */
	tongueWeight;

	/**
	 * Schema.org/vehicleEngine
	 * Information about the engine or engines of the vehicle.
	 *
	 * @property vehicleEngine
	 * @type EngineSpecification
	 */
	vehicleEngine;

	/**
	 * Schema.org/dateVehicleFirstRegistered
	 * The date of the first registration of the vehicle with the respective public authorities.
	 *
	 * @property dateVehicleFirstRegistered
	 * @type Date
	 */
	dateVehicleFirstRegistered;

	/**
	 * Schema.org/speed
	 * The speed range of the vehicle. If the vehicle is powered by an engine, the upper limit of the speed range (indicated by [[maxValue]] should be the maximum speed achievable under regular conditions.\n\nTypical unit code(s): KMH for km/h, HM for mile per hour (0.447 04 m/s), KNT for knot\n\n*Note 1: Use [[minValue]] and [[maxValue]] to indicate the range. Typically, the minimal value is zero.\n* Note 2: There are many different ways of measuring the speed range. You can link to information about how the given value has been determined using the [[valueReference]] property.
	 *
	 * @property speed
	 * @type QuantitativeValue
	 */
	speed;

	/**
	 * Schema.org/driveWheelConfiguration
	 * The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain.
	 *
	 * @property driveWheelConfiguration
	 * @type Text
	 */
	driveWheelConfiguration;

	/**
	 * Schema.org/seatingCapacity
	 * The number of persons that can be seated (e.g. in a vehicle), both in terms of the physical space available, and in terms of limitations set by law.\n\nTypical unit code(s): C62 for persons 
	 *
	 * @property seatingCapacity
	 * @type QuantitativeValue
	 */
	seatingCapacity;

	/**
	 * Schema.org/fuelCapacity
	 * The capacity of the fuel tank or in the case of electric cars, the battery. If there are multiple components for storage, this should indicate the total of all storage of the same type.\n\nTypical unit code(s): LTR for liters, GLL of US gallons, GLI for UK / imperial gallons, AMH for ampere-hours (for electrical vehicles).
	 *
	 * @property fuelCapacity
	 * @type QuantitativeValue
	 */
	fuelCapacity;

	/**
	 * Schema.org/cargoVolume
	 * The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.\n\nTypical unit code(s): LTR for liters, FTQ for cubic foot/feet\n\nNote: You can use [[minValue]] and [[maxValue]] to indicate ranges.
	 *
	 * @property cargoVolume
	 * @type QuantitativeValue
	 */
	cargoVolume;

	/**
	 * Schema.org/vehicleIdentificationNumber
	 * The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles.
	 *
	 * @property vehicleIdentificationNumber
	 * @type Text
	 */
	vehicleIdentificationNumber;

	/**
	 * Schema.org/vehicleSpecialUsage
	 * Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school, or as a taxi. The legislation in many countries requires this information to be revealed when offering a car for sale.
	 *
	 * @property vehicleSpecialUsage
	 * @type Text
	 */
	vehicleSpecialUsage;

	/**
	 * Schema.org/emissionsCO2
	 * The CO2 emissions in g/km. When used in combination with a QuantitativeValue, put "g/km" into the unitText property of that value, since there is no UN/CEFACT Common Code for "g/km".
	 *
	 * @property emissionsCO2
	 * @type Number
	 */
	emissionsCO2;

	/**
	 * Schema.org/stupidProperty
	 * This is a StupidProperty! - for testing only
	 *
	 * @property stupidProperty
	 * @type QuantitativeValue
	 */
	stupidProperty;

	/**
	 * Schema.org/vehicleSeatingCapacity
	 * The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.\n\nTypical unit code(s): C62 for persons.
	 *
	 * @property vehicleSeatingCapacity
	 * @type Number
	 */
	vehicleSeatingCapacity;

	/**
	 * Schema.org/trailerWeight
	 * The permitted weight of a trailer attached to the vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
	 *
	 * @property trailerWeight
	 * @type QuantitativeValue
	 */
	trailerWeight;

	/**
	 * Schema.org/numberOfPreviousOwners
	 * The number of owners of the vehicle, including the current one.\n\nTypical unit code(s): C62
	 *
	 * @property numberOfPreviousOwners
	 * @type Number
	 */
	numberOfPreviousOwners;

	/**
	 * Schema.org/purchaseDate
	 * The date the item e.g. vehicle was purchased by the current owner.
	 *
	 * @property purchaseDate
	 * @type Date
	 */
	purchaseDate;

	/**
	 * Schema.org/knownVehicleDamages
	 * A textual description of known damages, both repaired and unrepaired.
	 *
	 * @property knownVehicleDamages
	 * @type Text
	 */
	knownVehicleDamages;

	/**
	 * Schema.org/mileageFromOdometer
	 * The total distance travelled by the particular vehicle since its initial production, as read from its odometer.\n\nTypical unit code(s): KMT for kilometers, SMI for statute miles
	 *
	 * @property mileageFromOdometer
	 * @type QuantitativeValue
	 */
	mileageFromOdometer;

	/**
	 * Schema.org/fuelConsumption
	 * The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).\n\n* Note 1: There are unfortunately no standard unit codes for liters per 100 km.  Use [[unitText]] to indicate the unit of measurement, e.g. L/100 km.\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\n* Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use [[valueReference]] to link the value for the fuel consumption to another value.
	 *
	 * @property fuelConsumption
	 * @type QuantitativeValue
	 */
	fuelConsumption;

	/**
	 * Schema.org/numberOfAxles
	 * The number of axles.\n\nTypical unit code(s): C62
	 *
	 * @property numberOfAxles
	 * @type QuantitativeValue
	 */
	numberOfAxles;

	/**
	 * Schema.org/steeringPosition
	 * The position of the steering wheel or similar device (mostly for cars).
	 *
	 * @property steeringPosition
	 * @type SteeringPositionValue
	 */
	steeringPosition;

	/**
	 * Schema.org/accelerationTime
	 * The time needed to accelerate the vehicle from a given start velocity to a given target velocity.\n\nTypical unit code(s): SEC for seconds\n\n* Note: There are unfortunately no standard unit codes for seconds/0..100 km/h or seconds/0..60 mph. Simply use "SEC" for seconds and indicate the velocities in the [[name]] of the [[QuantitativeValue]], or use [[valueReference]] with a [[QuantitativeValue]] of 0..60 mph or 0..100 km/h to specify the reference speeds.
	 *
	 * @property accelerationTime
	 * @type QuantitativeValue
	 */
	accelerationTime;

	/**
	 * Schema.org/vehicleConfiguration
	 * A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.
	 *
	 * @property vehicleConfiguration
	 * @type Text
	 */
	vehicleConfiguration;

	/**
	 * Schema.org/numberOfAirbags
	 * The number or type of airbags in the vehicle.
	 *
	 * @property numberOfAirbags
	 * @type Text
	 */
	numberOfAirbags;

	/**
	 * Schema.org/weightTotal
	 * The permitted total weight of the loaded vehicle, including passengers and cargo and the weight of the empty vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
	 *
	 * @property weightTotal
	 * @type QuantitativeValue
	 */
	weightTotal;

	/**
	 * Schema.org/meetsEmissionStandard
	 * Indicates that the vehicle meets the respective emission standard.
	 *
	 * @property meetsEmissionStandard
	 * @type QualitativeValue
	 */
	meetsEmissionStandard;

	/**
	 * Schema.org/productionDate
	 * The date of production of the item, e.g. vehicle.
	 *
	 * @property productionDate
	 * @type Date
	 */
	productionDate;

	/**
	 * Schema.org/callSign
	 * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
	 *
	 * @property callSign
	 * @type Text
	 */
	callSign;

	/**
	 * Schema.org/vehicleInteriorColor
	 * The color or color combination of the interior of the vehicle.
	 *
	 * @property vehicleInteriorColor
	 * @type Text
	 */
	vehicleInteriorColor;

	/**
	 * Schema.org/numberOfForwardGears
	 * The total number of forward gears available for the transmission system of the vehicle.\n\nTypical unit code(s): C62
	 *
	 * @property numberOfForwardGears
	 * @type QuantitativeValue
	 */
	numberOfForwardGears;

}