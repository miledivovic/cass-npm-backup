/**
 * Schema.org/DefenceEstablishment
 * A defence establishment, such as an army or navy base.
 *
 * @author schema.org
 * @class DefenceEstablishment
 * @module org.schema
 */
public class DefenceEstablishment extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DefenceEstablishment";
	}

}