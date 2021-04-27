/**
 * Schema.org/Dataset
 * A body of structured information describing some topic(s) of interest.
 *
 * @author schema.org
 * @class Dataset
 * @module org.schema
 */
module.exports = class Dataset extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Dataset");
	}
};
