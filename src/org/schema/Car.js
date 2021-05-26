const schema = {};
schema.Vehicle = require("./Vehicle.js");
/**
 * Schema.org/Car
 * A car is a wheeled, self-powered motor vehicle used for transportation.
 *
 * @author schema.org
 * @class Car
 * @module org.schema
 * @extends Vehicle
 */
module.exports = class Car extends schema.Vehicle {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Car");
	}

	/**
	 * Schema.org/roofLoad
	 * The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]]\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
	 *
	 * @property roofLoad
	 * @type QuantitativeValue
	 */
	roofLoad;

	/**
	 * Schema.org/acrissCode
	 * The ACRISS Car Classification Code is a code used by many car rental companies, for classifying vehicles. ACRISS stands for Association of Car Rental Industry Systems and Standards.
	 *
	 * @property acrissCode
	 * @type Text
	 */
	acrissCode;

}