/**
 * Schema.org/FMRadioChannel
 * A radio channel that uses FM.
 *
 * @author schema.org
 * @class FMRadioChannel
 * @module org.schema
 */
public class FMRadioChannel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "FMRadioChannel";
	}

}