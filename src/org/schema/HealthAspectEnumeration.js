/**
 * Schema.org/HealthAspectEnumeration
 * HealthAspectEnumeration enumerates several aspects of health content online, each of which might be described using [[hasHealthAspect]] and [[HealthTopicContent]].
 *
 * @author schema.org
 * @class HealthAspectEnumeration
 * @module org.schema
 */
public class HealthAspectEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HealthAspectEnumeration";
	}

}