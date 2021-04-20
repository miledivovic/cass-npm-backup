/**
 * Schema.org/HealthAspectEnumeration
 * HealthAspectEnumeration enumerates several aspects of health content online, each of which might be described using [[hasHealthAspect]] and [[HealthTopicContent]].
 *
 * @author schema.org
 * @class HealthAspectEnumeration
 * @module org.schema
 */
module.exports = class HealthAspectEnumeration extends EcRemoteLinkedData {
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