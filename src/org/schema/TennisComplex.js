/**
 * Schema.org/TennisComplex
 * A tennis complex.
 *
 * @author schema.org
 * @class TennisComplex
 * @module org.schema
 */
module.exports = class TennisComplex extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "TennisComplex");
	}
};
