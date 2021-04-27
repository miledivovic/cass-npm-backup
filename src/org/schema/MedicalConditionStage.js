/**
 * Schema.org/MedicalConditionStage
 * A stage of a medical condition, such as 'Stage IIIa'.
 *
 * @author schema.org
 * @class MedicalConditionStage
 * @module org.schema
 */
module.exports = class MedicalConditionStage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MedicalConditionStage");
	}
};
