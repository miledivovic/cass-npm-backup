const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/FloorPlan
 * A FloorPlan is an explicit representation of a collection of similar accommodations, allowing the provision of common information (room counts, sizes, layout diagrams) and offers for rental or sale. In typical use, some [[ApartmentComplex]] has an [[accommodationFloorPlan]] which is a [[FloorPlan]].  A FloorPlan is always in the context of a particular place, either a larger [[ApartmentComplex]] or a single [[Apartment]]. The visual/spatial aspects of a floor plan (i.e. room layout, [see wikipedia](https://en.wikipedia.org/wiki/Floor_plan)) can be indicated using [[image]]. 
 *
 * @author schema.org
 * @class FloorPlan
 * @module org.schema
 * @extends Intangible
 */
module.exports = class FloorPlan extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FloorPlan");
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
	 * Schema.org/numberOfPartialBathrooms
	 * Number of partial bathrooms - The total number of half and ¼ bathrooms in an [[Accommodation]]. This corresponds to the [BathroomsPartial field in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsPartial+Field). 
	 *
	 * @property numberOfPartialBathrooms
	 * @type Number
	 */
	numberOfPartialBathrooms;

	/**
	 * Schema.org/numberOfAvailableAccommodationUnits
	 * Indicates the number of available accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAccommodationUnits]].
	 *
	 * @property numberOfAvailableAccommodationUnits
	 * @type QuantitativeValue
	 */
	numberOfAvailableAccommodationUnits;

	/**
	 * Schema.org/isPlanForApartment
	 * Indicates some accommodation that this floor plan describes.
	 *
	 * @property isPlanForApartment
	 * @type Accommodation
	 */
	isPlanForApartment;

	/**
	 * Schema.org/layoutImage
	 * A schematic image showing the floorplan layout.
	 *
	 * @property layoutImage
	 * @type URL
	 */
	layoutImage;

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
	 * Schema.org/numberOfAccommodationUnits
	 * Indicates the total (available plus unavailable) number of accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAvailableAccommodationUnits]].
	 *
	 * @property numberOfAccommodationUnits
	 * @type QuantitativeValue
	 */
	numberOfAccommodationUnits;

	/**
	 * Schema.org/numberOfFullBathrooms
	 * Number of full bathrooms - The total number of full and ¾ bathrooms in an [[Accommodation]]. This corresponds to the [BathroomsFull field in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsFull+Field).
	 *
	 * @property numberOfFullBathrooms
	 * @type Number
	 */
	numberOfFullBathrooms;

}