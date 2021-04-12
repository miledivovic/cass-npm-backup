/**
 * Schema.org/NonprofitType
 * NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be.
 *
 * @author schema.org
 * @class NonprofitType
 * @module org.schema
 */
public class NonprofitType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "NonprofitType";
	}

}