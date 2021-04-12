/**
 * Schema.org/BroadcastFrequencySpecification
 * The frequency in MHz and the modulation used for a particular BroadcastService.
 *
 * @author schema.org
 * @class BroadcastFrequencySpecification
 * @module org.schema
 */
public class BroadcastFrequencySpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BroadcastFrequencySpecification";
	}

}