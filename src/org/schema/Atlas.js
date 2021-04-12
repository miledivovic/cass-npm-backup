/**
 * Schema.org/Atlas
 * A collection or bound volume of maps, charts, plates or tables, physical or in media form illustrating any subject.
 *
 * @author schema.org
 * @class Atlas
 * @module org.schema
 */
public class Atlas extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Atlas";
	}

}