const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/HealthAspectEnumeration
 * HealthAspectEnumeration enumerates several aspects of health content online, each of which might be described using [[hasHealthAspect]] and [[HealthTopicContent]].
 *
 * @author schema.org
 * @class HealthAspectEnumeration
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class HealthAspectEnumeration extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HealthAspectEnumeration");
	}

}