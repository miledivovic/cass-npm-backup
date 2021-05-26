const schema = {};
schema.MediaObject = require("./MediaObject.js");
/**
 * Schema.org/LegislationObject
 * A specific object or file containing a Legislation. Note that the same Legislation can be published in multiple files. For example, a digitally signed PDF, a plain PDF and an HTML version.
 *
 * @author schema.org
 * @class LegislationObject
 * @module org.schema
 * @extends MediaObject
 */
module.exports = class LegislationObject extends schema.MediaObject {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LegislationObject");
	}

	/**
	 * Schema.org/legislationLegalValue
	 * The legal value of this legislation file. The same legislation can be written in multiple files with different legal values. Typically a digitally signed PDF have a "stronger" legal value than the HTML file of the same act.
	 *
	 * @property legislationLegalValue
	 * @type LegalValueLevel
	 */
	legislationLegalValue;

}