/**
 * Schema.org/AdministrativeArea
 * A geographical region, typically under the jurisdiction of a particular government.
 *
 * @author schema.org
 * @class AdministrativeArea
 * @module org.schema
 */
public class AdministrativeArea extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AdministrativeArea";
	}

}