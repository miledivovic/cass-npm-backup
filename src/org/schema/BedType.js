const schema = {};
schema.QualitativeValue = require("./QualitativeValue.js");
/**
 * Schema.org/BedType
 * A type of bed. This is used for indicating the bed or beds available in an accommodation.
 *
 * @author schema.org
 * @class BedType
 * @module org.schema
 * @extends QualitativeValue
 */
module.exports = class BedType extends schema.QualitativeValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BedType");
	}

}