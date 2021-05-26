const schema = {};
schema.Residence = require("./Residence.js");
/**
 * Schema.org/ApartmentComplex
 * Residence type: Apartment complex.
 *
 * @author schema.org
 * @class ApartmentComplex
 * @module org.schema
 * @extends Residence
 */
module.exports = class ApartmentComplex extends schema.Residence {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ApartmentComplex");
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
	 * Schema.org/tourBookingPage
	 * A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.
	 *
	 * @property tourBookingPage
	 * @type URL
	 */
	tourBookingPage;

	/**
	 * Schema.org/numberOfAvailableAccommodationUnits
	 * Indicates the number of available accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAccommodationUnits]].
	 *
	 * @property numberOfAvailableAccommodationUnits
	 * @type QuantitativeValue
	 */
	numberOfAvailableAccommodationUnits;

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

}