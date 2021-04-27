/**
 * Schema.org/InfectiousAgentClass
 * Classes of agents or pathogens that transmit infectious diseases. Enumerated type.
 *
 * @author schema.org
 * @class InfectiousAgentClass
 * @module org.schema
 */
module.exports = class InfectiousAgentClass extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "InfectiousAgentClass");
	}
};
