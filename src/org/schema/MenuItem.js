/**
 * Schema.org/MenuItem
 * A food or drink item listed in a menu or menu section.
 *
 * @author schema.org
 * @class MenuItem
 * @module org.schema
 */
public class MenuItem extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MenuItem";
	}

}