const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/SpeakableSpecification
 * A SpeakableSpecification indicates (typically via [[xpath]] or [[cssSelector]]) sections of a document that are highlighted as particularly [[speakable]]. Instances of this type are expected to be used primarily as values of the [[speakable]] property.
 *
 * @author schema.org
 * @class SpeakableSpecification
 * @module org.schema
 * @extends Intangible
 */
module.exports = class SpeakableSpecification extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SpeakableSpecification");
	}

	/**
	 * Schema.org/xpath
	 * An XPath, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
	 *
	 * @property xpath
	 * @type XPathType
	 */
	xpath;

	/**
	 * Schema.org/cssSelector
	 * A CSS selector, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
	 *
	 * @property cssSelector
	 * @type CssSelectorType
	 */
	cssSelector;

}