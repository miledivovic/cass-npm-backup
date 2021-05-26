const schema = {};
schema.CreateAction = require("./CreateAction.js");
/**
 * Schema.org/WriteAction
 * The act of authoring written creative content.
 *
 * @author schema.org
 * @class WriteAction
 * @module org.schema
 * @extends CreateAction
 */
module.exports = class WriteAction extends schema.CreateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WriteAction");
	}

	/**
	 * Schema.org/language
	 * A sub property of instrument. The language used on this action.
	 *
	 * @property language
	 * @type Language
	 */
	language;

	/**
	 * Schema.org/inLanguage
	 * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
	 *
	 * @property inLanguage
	 * @type Language
	 */
	inLanguage;

}