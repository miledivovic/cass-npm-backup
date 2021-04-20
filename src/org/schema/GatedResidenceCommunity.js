/**
 * Schema.org/GatedResidenceCommunity
 * Residence type: Gated community.
 *
 * @author schema.org
 * @class GatedResidenceCommunity
 * @module org.schema
 */
module.exports = class GatedResidenceCommunity extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GatedResidenceCommunity");
	}

}