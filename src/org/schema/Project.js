const schema = {};
schema.Organization = require("./Organization.js");
/**
 * Schema.org/Project
 * An enterprise (potentially individual but typically collaborative), planned to achieve a particular aim.
Use properties from [[Organization]], [[subOrganization]]/[[parentOrganization]] to indicate project sub-structures. 
   
 *
 * @author schema.org
 * @class Project
 * @module org.schema
 * @extends Organization
 */
module.exports = class Project extends schema.Organization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Project");
	}

}