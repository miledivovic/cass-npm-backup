/**
 * Schema.org/EngineSpecification
 * Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities.
 *
 * @author schema.org
 * @class EngineSpecification
 * @module org.schema
 */
module.exports = class EngineSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "EngineSpecification");
	}
};
