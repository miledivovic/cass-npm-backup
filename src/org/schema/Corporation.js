/**
 * Schema.org/Corporation
 * Organization: A business corporation.
 *
 * @author schema.org
 * @class Corporation
 * @module org.schema
 */
public class Corporation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Corporation";
	}

}