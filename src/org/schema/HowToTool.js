/**
 * Schema.org/HowToTool
 * A tool used (but not consumed) when performing instructions for how to achieve a result.
 *
 * @author schema.org
 * @class HowToTool
 * @module org.schema
 */
public class HowToTool extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HowToTool";
	}

}