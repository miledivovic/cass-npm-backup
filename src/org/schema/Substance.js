const schema = {};
schema.MedicalEntity = require("./MedicalEntity.js");
/**
 * Schema.org/Substance
 * Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical.
 *
 * @author schema.org
 * @class Substance
 * @module org.schema
 * @extends MedicalEntity
 */
module.exports = class Substance extends schema.MedicalEntity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Substance");
	}

	/**
	 * Schema.org/maximumIntake
	 * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
	 *
	 * @property maximumIntake
	 * @type MaximumDoseSchedule
	 */
	maximumIntake;

	/**
	 * Schema.org/activeIngredient
	 * An active ingredient, typically chemical compounds and/or biologic substances.
	 *
	 * @property activeIngredient
	 * @type Text
	 */
	activeIngredient;

}