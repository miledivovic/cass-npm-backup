/**
 * Schema.org/InsertAction
 * The act of adding at a specific location in an ordered collection.
 *
 * @author schema.org
 * @class InsertAction
 * @module org.schema
 */
public class InsertAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "InsertAction";
	}

}