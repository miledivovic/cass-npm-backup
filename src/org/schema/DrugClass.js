/**
 * Schema.org/DrugClass
 * A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc.
 *
 * @author schema.org
 * @class DrugClass
 * @module org.schema
 */
public class DrugClass extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DrugClass";
	}

}