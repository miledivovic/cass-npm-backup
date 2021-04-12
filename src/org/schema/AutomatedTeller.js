/**
 * Schema.org/AutomatedTeller
 * ATM/cash machine.
 *
 * @author schema.org
 * @class AutomatedTeller
 * @module org.schema
 */
public class AutomatedTeller extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AutomatedTeller";
	}

}