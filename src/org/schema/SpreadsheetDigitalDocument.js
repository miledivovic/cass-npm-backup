/**
 * Schema.org/SpreadsheetDigitalDocument
 * A spreadsheet file.
 *
 * @author schema.org
 * @class SpreadsheetDigitalDocument
 * @module org.schema
 */
module.exports = class SpreadsheetDigitalDocument extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.org/",
			"SpreadsheetDigitalDocument"
		);
	}
};
