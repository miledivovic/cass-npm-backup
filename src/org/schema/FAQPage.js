/**
 * Schema.org/FAQPage
 * A [[FAQPage]] is a [[WebPage]] presenting one or more "[Frequently asked questions](https://en.wikipedia.org/wiki/FAQ)" (see also [[QAPage]]).
 *
 * @author schema.org
 * @class FAQPage
 * @module org.schema
 */
module.exports = class FAQPage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FAQPage");
	}

}