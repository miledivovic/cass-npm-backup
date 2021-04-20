/**
 * Schema.org/NonprofitType
 * NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be.
 *
 * @author schema.org
 * @class NonprofitType
 * @module org.schema
 */
module.exports = class NonprofitType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","NonprofitType");
	}

}