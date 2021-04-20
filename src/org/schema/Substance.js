/**
 * Schema.org/Substance
 * Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical.
 *
 * @author schema.org
 * @class Substance
 * @module org.schema
 */
module.exports = class Substance extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Substance");
	}

}