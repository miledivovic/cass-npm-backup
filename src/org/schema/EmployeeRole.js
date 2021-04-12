/**
 * Schema.org/EmployeeRole
 * A subclass of OrganizationRole used to describe employee relationships.
 *
 * @author schema.org
 * @class EmployeeRole
 * @module org.schema
 */
public class EmployeeRole extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EmployeeRole";
	}

}