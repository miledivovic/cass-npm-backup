/**
 * Schema.org/GasStation
 * A gas station.
 *
 * @author schema.org
 * @class GasStation
 * @module org.schema
 */
module.exports = class GasStation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GasStation");
	}

}