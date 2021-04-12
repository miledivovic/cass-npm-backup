/**
 * Schema.org/DeactivateAction
 * The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight).
 *
 * @author schema.org
 * @class DeactivateAction
 * @module org.schema
 */
public class DeactivateAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DeactivateAction";
	}

}