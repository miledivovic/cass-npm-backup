/**
 * Schema.org/ArchiveOrganization
 * [object Object]
 *
 * @author schema.org
 * @class ArchiveOrganization
 * @module org.schema
 */
module.exports = class ArchiveOrganization extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ArchiveOrganization");
	}
};
