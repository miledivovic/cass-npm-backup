/**
 * Schema.org/Winery
 * A winery.
 *
 * @author schema.org
 * @class Winery
 * @module org.schema
 */
module.exports = class Winery extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Winery");
	}

}