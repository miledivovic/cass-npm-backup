/**
 * Schema.org/WebAPI
 * An application programming interface accessible over Web/Internet technologies.
 *
 * @author schema.org
 * @class WebAPI
 * @module org.schema
 */
public class WebAPI extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "WebAPI";
	}

}