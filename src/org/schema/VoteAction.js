/**
 * Schema.org/VoteAction
 * The act of expressing a preference from a fixed/finite/structured set of choices/options.
 *
 * @author schema.org
 * @class VoteAction
 * @module org.schema
 */
module.exports = class VoteAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "VoteAction";
	}

}