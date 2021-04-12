/**
 * Schema.org/OnDemandEvent
 * A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand.
 *
 * @author schema.org
 * @class OnDemandEvent
 * @module org.schema
 */
public class OnDemandEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "OnDemandEvent";
	}

}