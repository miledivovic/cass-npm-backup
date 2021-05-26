const schema = {};
schema.Text = require("./Text.js");
/**
 * Schema.org/PronounceableText
 * Data type: PronounceableText.
 *
 * @author schema.org
 * @class PronounceableText
 * @module org.schema
 * @extends Text
 */
module.exports = class PronounceableText extends schema.Text {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PronounceableText");
	}

	/**
	 * Schema.org/textValue
	 * Text value being annotated.
	 *
	 * @property textValue
	 * @type Text
	 */
	textValue;

	/**
	 * Schema.org/phoneticText
	 * Representation of a text [[textValue]] using the specified [[speechToTextMarkup]]. For example the city name of Houston in IPA: /ˈhjuːstən/.
	 *
	 * @property phoneticText
	 * @type Text
	 */
	phoneticText;

	/**
	 * Schema.org/inLanguage
	 * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
	 *
	 * @property inLanguage
	 * @type Language
	 */
	inLanguage;

	/**
	 * Schema.org/speechToTextMarkup
	 * Form of markup used. eg. [SSML](https://www.w3.org/TR/speech-synthesis11) or [IPA](https://www.wikidata.org/wiki/Property:P898).
	 *
	 * @property speechToTextMarkup
	 * @type Text
	 */
	speechToTextMarkup;

}