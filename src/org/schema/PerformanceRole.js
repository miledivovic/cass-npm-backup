/**
 * Schema.org/PerformanceRole
 * A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc.
 *
 * @author schema.org
 * @class PerformanceRole
 * @module org.schema
 */
module.exports = class PerformanceRole extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "PerformanceRole");
	}
};
