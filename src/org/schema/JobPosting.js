/**
 * Schema.org/JobPosting
 * A listing that describes a job opening in a certain organization.
 *
 * @author schema.org
 * @class JobPosting
 * @module org.schema
 */
public class JobPosting extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "JobPosting";
	}

}