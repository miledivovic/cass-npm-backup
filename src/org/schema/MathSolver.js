/**
 * Schema.org/MathSolver
 * A math solver which is capable of solving a subset of mathematical problems.
 *
 * @author schema.org
 * @class MathSolver
 * @module org.schema
 */
module.exports = class MathSolver extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MathSolver");
	}

}