/**
 * Schema.org/DataCatalog
 * A collection of datasets.
 *
 * @author schema.org
 * @class DataCatalog
 * @module org.schema
 */
module.exports = class DataCatalog extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DataCatalog");
	}

}