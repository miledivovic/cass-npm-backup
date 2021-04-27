/**
 * Schema.org/DepartmentStore
 * A department store.
 *
 * @author schema.org
 * @class DepartmentStore
 * @module org.schema
 */
module.exports = class DepartmentStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "DepartmentStore");
	}
};
