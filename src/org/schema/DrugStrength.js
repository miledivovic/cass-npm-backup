const schema = {};
schema.MedicalIntangible = require("./MedicalIntangible.js");
/**
 * Schema.org/DrugStrength
 * A specific strength in which a medical drug is available in a specific country.
 *
 * @author schema.org
 * @class DrugStrength
 * @module org.schema
 * @extends MedicalIntangible
 */
module.exports = class DrugStrength extends schema.MedicalIntangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DrugStrength");
	}

	/**
	 * Schema.org/strengthUnit
	 * The units of an active ingredient's strength, e.g. mg.
	 *
	 * @property strengthUnit
	 * @type Text
	 */
	strengthUnit;

	/**
	 * Schema.org/maximumIntake
	 * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
	 *
	 * @property maximumIntake
	 * @type MaximumDoseSchedule
	 */
	maximumIntake;

	/**
	 * Schema.org/strengthValue
	 * The value of an active ingredient's strength, e.g. 325.
	 *
	 * @property strengthValue
	 * @type Number
	 */
	strengthValue;

	/**
	 * Schema.org/activeIngredient
	 * An active ingredient, typically chemical compounds and/or biologic substances.
	 *
	 * @property activeIngredient
	 * @type Text
	 */
	activeIngredient;

	/**
	 * Schema.org/availableIn
	 * The location in which the strength is available.
	 *
	 * @property availableIn
	 * @type AdministrativeArea
	 */
	availableIn;

}