/**
 * Schema.org/MedicalTrial
 * A medical trial is a type of medical study that uses scientific process used to compare the safety and efficacy of medical therapies or medical procedures. In general, medical trials are controlled and subjects are allocated at random to the different treatment and/or control groups.
 *
 * @author schema.org
 * @class MedicalTrial
 * @module org.schema
 */
module.exports = class MedicalTrial extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalTrial");
	}

}