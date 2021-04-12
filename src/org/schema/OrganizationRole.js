/**
 * Schema.org/OrganizationRole
 * A subclass of Role used to describe roles within organizations.
 *
 * @author schema.org
 * @class OrganizationRole
 * @module org.schema
 */
public class OrganizationRole extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "OrganizationRole";
	}

}