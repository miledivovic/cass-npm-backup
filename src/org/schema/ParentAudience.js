/**
 * Schema.org/ParentAudience
 * A set of characteristics describing parents, who can be interested in viewing some content.
 *
 * @author schema.org
 * @class ParentAudience
 * @module org.schema
 */
module.exports = class ParentAudience extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ParentAudience");
	}
};
