/**
 * Schema.org/ChooseAction
 * The act of expressing a preference from a set of options or a large or unbounded set of choices/options.
 *
 * @author schema.org
 * @class ChooseAction
 * @module org.schema
 */
module.exports = class ChooseAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ChooseAction";
	}

}