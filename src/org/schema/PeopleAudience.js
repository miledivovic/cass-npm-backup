const schema = {};
schema.Audience = require("./Audience.js");
/**
 * Schema.org/PeopleAudience
 * A set of characteristics belonging to people, e.g. who compose an item's target audience.
 *
 * @author schema.org
 * @class PeopleAudience
 * @module org.schema
 * @extends Audience
 */
module.exports = class PeopleAudience extends schema.Audience {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PeopleAudience");
	}

	/**
	 * Schema.org/requiredMaxAge
	 * Audiences defined by a person's maximum age.
	 *
	 * @property requiredMaxAge
	 * @type Integer
	 */
	requiredMaxAge;

	/**
	 * Schema.org/suggestedGender
	 * The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
	 *
	 * @property suggestedGender
	 * @type Text
	 */
	suggestedGender;

	/**
	 * Schema.org/healthCondition
	 * Specifying the health condition(s) of a patient, medical study, or other target audience.
	 *
	 * @property healthCondition
	 * @type MedicalCondition
	 */
	healthCondition;

	/**
	 * Schema.org/requiredGender
	 * Audiences defined by a person's gender.
	 *
	 * @property requiredGender
	 * @type Text
	 */
	requiredGender;

	/**
	 * Schema.org/suggestedAge
	 * The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
	 *
	 * @property suggestedAge
	 * @type QuantitativeValue
	 */
	suggestedAge;

	/**
	 * Schema.org/suggestedMinAge
	 * Minimum recommended age in years for the audience or user.
	 *
	 * @property suggestedMinAge
	 * @type Number
	 */
	suggestedMinAge;

	/**
	 * Schema.org/suggestedMeasurement
	 * A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
	 *
	 * @property suggestedMeasurement
	 * @type QuantitativeValue
	 */
	suggestedMeasurement;

	/**
	 * Schema.org/requiredMinAge
	 * Audiences defined by a person's minimum age.
	 *
	 * @property requiredMinAge
	 * @type Integer
	 */
	requiredMinAge;

	/**
	 * Schema.org/suggestedMaxAge
	 * Maximum recommended age in years for the audience or user.
	 *
	 * @property suggestedMaxAge
	 * @type Number
	 */
	suggestedMaxAge;

}