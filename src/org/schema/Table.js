/**
 * Schema.org/Table
 * A table on a Web page.
 *
 * @author schema.org
 * @class Table
 * @module org.schema
 */
public class Table extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Table";
	}

}