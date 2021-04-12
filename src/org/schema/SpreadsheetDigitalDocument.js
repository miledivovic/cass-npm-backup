/**
 * Schema.org/SpreadsheetDigitalDocument
 * A spreadsheet file.
 *
 * @author schema.org
 * @class SpreadsheetDigitalDocument
 * @module org.schema
 */
public class SpreadsheetDigitalDocument extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SpreadsheetDigitalDocument";
	}

}