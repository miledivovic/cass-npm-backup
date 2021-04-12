/**
 * Schema.org/DepartmentStore
 * A department store.
 *
 * @author schema.org
 * @class DepartmentStore
 * @module org.schema
 */
public class DepartmentStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DepartmentStore";
	}

}