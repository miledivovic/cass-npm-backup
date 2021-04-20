/**
 * Schema.org/PronounceableText
 * Data type: PronounceableText.
 *
 * @author schema.org
 * @class PronounceableText
 * @module org.schema
 */
module.exports = class PronounceableText extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PronounceableText");
	}

}