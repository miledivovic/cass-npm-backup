/**
 * Schema.org/TransferAction
 * The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another.
 *
 * @author schema.org
 * @class TransferAction
 * @module org.schema
 */
public class TransferAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TransferAction";
	}

}