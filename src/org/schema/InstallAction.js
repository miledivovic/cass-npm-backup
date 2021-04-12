/**
 * Schema.org/InstallAction
 * The act of installing an application.
 *
 * @author schema.org
 * @class InstallAction
 * @module org.schema
 */
public class InstallAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "InstallAction";
	}

}