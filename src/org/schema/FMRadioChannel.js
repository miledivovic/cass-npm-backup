/**
 * Schema.org/FMRadioChannel
 * A radio channel that uses FM.
 *
 * @author schema.org
 * @class FMRadioChannel
 * @module org.schema
 */
module.exports = class FMRadioChannel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "FMRadioChannel");
	}
};
