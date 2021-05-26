const schema = {};
schema.LifestyleModification = require("./LifestyleModification.js");
/**
 * Schema.org/PhysicalActivity
 * Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan.
 *
 * @author schema.org
 * @class PhysicalActivity
 * @module org.schema
 * @extends LifestyleModification
 */
module.exports = class PhysicalActivity extends schema.LifestyleModification {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PhysicalActivity");
	}

	/**
	 * Schema.org/epidemiology
	 * The characteristics of associated patients, such as age, gender, race etc.
	 *
	 * @property epidemiology
	 * @type Text
	 */
	epidemiology;

	/**
	 * Schema.org/associatedAnatomy
	 * The anatomy of the underlying organ system or structures associated with this entity.
	 *
	 * @property associatedAnatomy
	 * @type AnatomicalSystem
	 */
	associatedAnatomy;

	/**
	 * Schema.org/category
	 * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
	 *
	 * @property category
	 * @type Text
	 */
	category;

	/**
	 * Schema.org/pathophysiology
	 * Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.
	 *
	 * @property pathophysiology
	 * @type Text
	 */
	pathophysiology;

}