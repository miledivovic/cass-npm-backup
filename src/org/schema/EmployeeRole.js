const schema = {};
schema.OrganizationRole = require("./OrganizationRole.js");
/**
 * Schema.org/EmployeeRole
 * A subclass of OrganizationRole used to describe employee relationships.
 *
 * @author schema.org
 * @class EmployeeRole
 * @module org.schema
 * @extends OrganizationRole
 */
module.exports = class EmployeeRole extends schema.OrganizationRole {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EmployeeRole");
	}

	/**
	 * Schema.org/salaryCurrency
	 * The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) ) used for the main salary information in this job posting or for this employee.
	 *
	 * @property salaryCurrency
	 * @type Text
	 */
	salaryCurrency;

	/**
	 * Schema.org/baseSalary
	 * The base salary of the job or of an employee in an EmployeeRole.
	 *
	 * @property baseSalary
	 * @type PriceSpecification
	 */
	baseSalary;

}