/**
 * Schema.org/PlanAction
 * The act of planning the execution of an event/task/action/reservation/plan to a future date.
 *
 * @author schema.org
 * @class PlanAction
 * @module org.schema
 */
public class PlanAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PlanAction";
	}

}