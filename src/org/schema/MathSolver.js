/**
 * Schema.org/MathSolver
 * A math solver which is capable of solving a subset of mathematical problems.
 *
 * @author schema.org
 * @class MathSolver
 * @module org.schema
 */
public class MathSolver extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MathSolver";
	}

}