const schema = {};
schema.Place = require("./Place.js");
/**
 * Schema.org/Accommodation
 * An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement.
For more specific types of accommodations not defined in schema.org, one can use additionalType with external vocabularies.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

 *
 * @author schema.org
 * @class Accommodation
 * @module org.schema
 * @extends Place
 */
module.exports = class Accommodation extends schema.Place {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Accommodation");
	}

	/**
	 * Schema.org/numberOfBedrooms
	 * The total integer number of bedrooms in a some [[Accommodation]], [[ApartmentComplex]] or [[FloorPlan]].
	 *
	 * @property numberOfBedrooms
	 * @type Number
	 */
	numberOfBedrooms;

	/**
	 * Schema.org/floorLevel
	 * The floor level for an [[Accommodation]] in a multi-storey building. Since counting
  systems [vary internationally](https://en.wikipedia.org/wiki/Storey#Consecutive_number_floor_designations), the local system should be used where possible.
	 *
	 * @property floorLevel
	 * @type Text
	 */
	floorLevel;

	/**
	 * Schema.org/permittedUsage
	 * Indications regarding the permitted usage of the accommodation.
	 *
	 * @property permittedUsage
	 * @type Text
	 */
	permittedUsage;

	/**
	 * Schema.org/tourBookingPage
	 * A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.
	 *
	 * @property tourBookingPage
	 * @type URL
	 */
	tourBookingPage;

	/**
	 * Schema.org/numberOfPartialBathrooms
	 * Number of partial bathrooms - The total number of half and ¼ bathrooms in an [[Accommodation]]. This corresponds to the [BathroomsPartial field in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsPartial+Field). 
	 *
	 * @property numberOfPartialBathrooms
	 * @type Number
	 */
	numberOfPartialBathrooms;

	/**
	 * Schema.org/leaseLength
	 * Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.
	 *
	 * @property leaseLength
	 * @type QuantitativeValue
	 */
	leaseLength;

	/**
	 * Schema.org/accommodationCategory
	 * Category of an [[Accommodation]], following real estate conventions e.g. RESO (see [PropertySubType](https://ddwiki.reso.org/display/DDW17/PropertySubType+Field), and [PropertyType](https://ddwiki.reso.org/display/DDW17/PropertyType+Field) fields  for suggested values).
	 *
	 * @property accommodationCategory
	 * @type Text
	 */
	accommodationCategory;

	/**
	 * Schema.org/accommodationFloorPlan
	 * A floorplan of some [[Accommodation]].
	 *
	 * @property accommodationFloorPlan
	 * @type FloorPlan
	 */
	accommodationFloorPlan;

	/**
	 * Schema.org/floorSize
	 * The size of the accommodation, e.g. in square meter or squarefoot.
Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard 
	 *
	 * @property floorSize
	 * @type QuantitativeValue
	 */
	floorSize;

	/**
	 * Schema.org/numberOfRooms
	 * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
	 *
	 * @property numberOfRooms
	 * @type QuantitativeValue
	 */
	numberOfRooms;

	/**
	 * Schema.org/amenityFeature
	 * An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
	 *
	 * @property amenityFeature
	 * @type LocationFeatureSpecification
	 */
	amenityFeature;

	/**
	 * Schema.org/numberOfBathroomsTotal
	 * The total integer number of bathrooms in a some [[Accommodation]], following real estate conventions as [documented in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsTotalInteger+Field): "The simple sum of the number of bathrooms. For example for a property with two Full Bathrooms and one Half Bathroom, the Bathrooms Total Integer will be 3.". See also [[numberOfRooms]].
	 *
	 * @property numberOfBathroomsTotal
	 * @type Integer
	 */
	numberOfBathroomsTotal;

	/**
	 * Schema.org/petsAllowed
	 * Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.
	 *
	 * @property petsAllowed
	 * @type Boolean
	 */
	petsAllowed;

	/**
	 * Schema.org/numberOfFullBathrooms
	 * Number of full bathrooms - The total number of full and ¾ bathrooms in an [[Accommodation]]. This corresponds to the [BathroomsFull field in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsFull+Field).
	 *
	 * @property numberOfFullBathrooms
	 * @type Number
	 */
	numberOfFullBathrooms;

	/**
	 * Schema.org/yearBuilt
	 * The year an [[Accommodation]] was constructed. This corresponds to the [YearBuilt field in RESO](https://ddwiki.reso.org/display/DDW17/YearBuilt+Field). 
	 *
	 * @property yearBuilt
	 * @type Number
	 */
	yearBuilt;

}