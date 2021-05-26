const schema = {};
schema.TherapeuticProcedure = require("./TherapeuticProcedure.js");
/**
 * Schema.org/PsychologicalTreatment
 * A process of care relying upon counseling, dialogue and communication  aimed at improving a mental health condition without use of drugs.
 *
 * @author schema.org
 * @class PsychologicalTreatment
 * @module org.schema
 * @extends TherapeuticProcedure
 */
module.exports = class PsychologicalTreatment extends schema.TherapeuticProcedure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PsychologicalTreatment");
	}

}