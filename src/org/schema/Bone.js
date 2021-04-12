/**
 * Schema.org/Bone
 * Rigid connective tissue that comprises up the skeletal structure of the human body.
 *
 * @author schema.org
 * @class Bone
 * @module org.schema
 */
public class Bone extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Bone";
	}

}