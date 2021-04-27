/**
 * Schema.org/Specialty
 * Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort.
 *
 * @author schema.org
 * @class Specialty
 * @module org.schema
 */
module.exports = class Specialty extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Specialty");
	}
};
