const schema = {};
schema.PlayAction = require("./PlayAction.js");
/**
 * Schema.org/PerformAction
 * The act of participating in performance arts.
 *
 * @author schema.org
 * @class PerformAction
 * @module org.schema
 * @extends PlayAction
 */
module.exports = class PerformAction extends schema.PlayAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PerformAction");
	}

	/**
	 * Schema.org/entertainmentBusiness
	 * A sub property of location. The entertainment business where the action occurred.
	 *
	 * @property entertainmentBusiness
	 * @type EntertainmentBusiness
	 */
	entertainmentBusiness;

}