/**
 * Schema.org/SingleFamilyResidence
 * Residence type: Single-family home.
 *
 * @author schema.org
 * @class SingleFamilyResidence
 * @module org.schema
 */
public class SingleFamilyResidence extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SingleFamilyResidence";
	}

}