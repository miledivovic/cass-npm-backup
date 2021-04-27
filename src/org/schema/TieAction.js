/**
 * Schema.org/TieAction
 * The act of reaching a draw in a competitive activity.
 *
 * @author schema.org
 * @class TieAction
 * @module org.schema
 */
module.exports = class TieAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "TieAction");
	}
};
