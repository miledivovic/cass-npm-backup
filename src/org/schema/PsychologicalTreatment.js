/**
 * Schema.org/PsychologicalTreatment
 * A process of care relying upon counseling, dialogue and communication  aimed at improving a mental health condition without use of drugs.
 *
 * @author schema.org
 * @class PsychologicalTreatment
 * @module org.schema
 */
module.exports = class PsychologicalTreatment extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "PsychologicalTreatment");
	}
};
