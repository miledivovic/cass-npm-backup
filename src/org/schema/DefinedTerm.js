const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/DefinedTerm
 * A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term.
 *
 * @author schema.org
 * @class DefinedTerm
 * @module org.schema
 * @extends Intangible
 */
module.exports = class DefinedTerm extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DefinedTerm");
	}

	/**
	 * Schema.org/inDefinedTermSet
	 * A [[DefinedTermSet]] that contains this term.
	 *
	 * @property inDefinedTermSet
	 * @type DefinedTermSet
	 */
	inDefinedTermSet;

	/**
	 * Schema.org/termCode
	 * A code that identifies this [[DefinedTerm]] within a [[DefinedTermSet]]
	 *
	 * @property termCode
	 * @type Text
	 */
	termCode;

}