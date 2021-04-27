/**
 * Schema.org/TelevisionStation
 * A television station.
 *
 * @author schema.org
 * @class TelevisionStation
 * @module org.schema
 */
module.exports = class TelevisionStation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "TelevisionStation");
	}
};
