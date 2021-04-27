/**
 * Schema.org/ComputerLanguage
 * This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the [[Language]] type.
 *
 * @author schema.org
 * @class ComputerLanguage
 * @module org.schema
 */
module.exports = class ComputerLanguage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ComputerLanguage");
	}
};
