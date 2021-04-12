/**
 * Schema.org/USNonprofitType
 * USNonprofitType: Non-profit organization type originating from the United States.
 *
 * @author schema.org
 * @class USNonprofitType
 * @module org.schema
 */
public class USNonprofitType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "USNonprofitType";
	}

}