/**
 * Schema.org/AlignmentObject
 * An intangible item that describes an alignment between a learning resource and a node in an educational framework.

Should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
 *
 * @author schema.org
 * @class AlignmentObject
 * @module org.schema
 */
module.exports = class AlignmentObject extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AlignmentObject");
	}

}