/**
 * Schema.org/JobPosting
 * A listing that describes a job opening in a certain organization.
 *
 * @author schema.org
 * @class JobPosting
 * @module org.schema
 */
module.exports = class JobPosting extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","JobPosting");
	}

}