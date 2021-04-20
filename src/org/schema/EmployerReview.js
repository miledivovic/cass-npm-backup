/**
 * Schema.org/EmployerReview
 * An [[EmployerReview]] is a review of an [[Organization]] regarding its role as an employer, written by a current or former employee of that organization.
 *
 * @author schema.org
 * @class EmployerReview
 * @module org.schema
 */
module.exports = class EmployerReview extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EmployerReview");
	}

}