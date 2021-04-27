/**
 * Schema.org/EmployeeRole
 * A subclass of OrganizationRole used to describe employee relationships.
 *
 * @author schema.org
 * @class EmployeeRole
 * @module org.schema
 */
module.exports = class EmployeeRole extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "EmployeeRole");
	}
};
