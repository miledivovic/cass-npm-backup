/**
 *  Schema.org/EmployeeRole
 *  A subclass of OrganizationRole used to describe employee relationships.
 * 
 *  @author schema.org
 *  @class EmployeeRole
 *  @module org.schema
 *  @extends OrganizationRole
 */
var EmployeeRole = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    OrganizationRole.call(this);
    this.context = "http://schema.org/";
    this.type = "EmployeeRole";
};
EmployeeRole = stjs.extend(EmployeeRole, OrganizationRole, [], function(constructor, prototype) {
    /**
     *  Schema.org/salaryCurrency
     *  The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) ) used for the main salary information in this job posting or for this employee.
     * 
     *  @property salaryCurrency
     *  @type Text
     */
    prototype.salaryCurrency = null;
    /**
     *  Schema.org/baseSalary
     *  The base salary of the job or of an employee in an EmployeeRole.
     * 
     *  @property baseSalary
     *  @type MonetaryAmount
     */
    prototype.baseSalary = null;
}, {baseSalary: "MonetaryAmount", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
