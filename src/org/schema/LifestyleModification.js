const schema = {};
schema.MedicalEntity = require("./MedicalEntity.js");
/**
 * Schema.org/LifestyleModification
 * A process of care involving exercise, changes to diet, fitness routines, and other lifestyle changes aimed at improving a health condition.
 *
 * @author schema.org
 * @class LifestyleModification
 * @module org.schema
 * @extends MedicalEntity
 */
module.exports = class LifestyleModification extends schema.MedicalEntity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LifestyleModification");
	}

}