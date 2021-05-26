const schema = {};
schema.Organization = require("./Organization.js");
/**
 * Schema.org/Corporation
 * Organization: A business corporation.
 *
 * @author schema.org
 * @class Corporation
 * @module org.schema
 * @extends Organization
 */
module.exports = class Corporation extends schema.Organization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Corporation");
	}

	/**
	 * Schema.org/tickerSymbol
	 * The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we recommend using the controlled vocabulary of Market Identifier Codes (MIC) specified in ISO15022.
	 *
	 * @property tickerSymbol
	 * @type Text
	 */
	tickerSymbol;

}