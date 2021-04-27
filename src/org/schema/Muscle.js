/**
 * Schema.org/Muscle
 * A muscle is an anatomical structure consisting of a contractile form of tissue that animals use to effect movement.
 *
 * @author schema.org
 * @class Muscle
 * @module org.schema
 */
module.exports = class Muscle extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Muscle");
	}
};
