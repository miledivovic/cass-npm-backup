const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/ComputerLanguage
 * This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the [[Language]] type.
 *
 * @author schema.org
 * @class ComputerLanguage
 * @module org.schema
 * @extends Intangible
 */
module.exports = class ComputerLanguage extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ComputerLanguage");
	}

}