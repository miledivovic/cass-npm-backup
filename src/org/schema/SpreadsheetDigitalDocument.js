const schema = {};
schema.DigitalDocument = require("./DigitalDocument.js");
/**
 * Schema.org/SpreadsheetDigitalDocument
 * A spreadsheet file.
 *
 * @author schema.org
 * @class SpreadsheetDigitalDocument
 * @module org.schema
 * @extends DigitalDocument
 */
module.exports = class SpreadsheetDigitalDocument extends schema.DigitalDocument {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SpreadsheetDigitalDocument");
	}

}