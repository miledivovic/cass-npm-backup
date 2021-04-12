/**
 * Schema.org/CreateAction
 * The act of deliberately creating/producing/generating/building a result out of the agent.
 *
 * @author schema.org
 * @class CreateAction
 * @module org.schema
 */
module.exports = class CreateAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CreateAction";
	}

}