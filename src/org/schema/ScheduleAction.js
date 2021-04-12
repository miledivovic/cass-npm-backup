/**
 * Schema.org/ScheduleAction
 * Scheduling future actions, events, or tasks.\n\nRelated actions:\n\n* [[ReserveAction]]: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation.
 *
 * @author schema.org
 * @class ScheduleAction
 * @module org.schema
 */
public class ScheduleAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ScheduleAction";
	}

}