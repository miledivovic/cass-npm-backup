/**
 * Schema.org/SeekToAction
 * This is the [[Action]] of navigating to a specific [[startOffset]] timestamp within a [[VideoObject]], typically represented with a URL template structure.
 *
 * @author schema.org
 * @class SeekToAction
 * @module org.schema
 */
module.exports = class SeekToAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "SeekToAction");
	}
};
