const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Guide
 * [[Guide]] is a page or article that recommend specific products or services, or aspects of a thing for a user to consider. A [[Guide]] may represent a Buying Guide and detail aspects of products or services for a user to consider. A [[Guide]] may represent a Product Guide and recommend specific products or services. A [[Guide]] may represent a Ranked List and recommend specific products or services with ranking.
 *
 * @author schema.org
 * @class Guide
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Guide extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Guide");
	}

	/**
	 * Schema.org/reviewAspect
	 * This Review or Rating is relevant to this part or facet of the itemReviewed.
	 *
	 * @property reviewAspect
	 * @type Text
	 */
	reviewAspect;

}