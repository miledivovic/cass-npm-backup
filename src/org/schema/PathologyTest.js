/**
 * Schema.org/PathologyTest
 * A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist.
 *
 * @author schema.org
 * @class PathologyTest
 * @module org.schema
 */
module.exports = class PathologyTest extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PathologyTest");
	}

}