const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/MathSolver
 * A math solver which is capable of solving a subset of mathematical problems.
 *
 * @author schema.org
 * @class MathSolver
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class MathSolver extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MathSolver");
	}

	/**
	 * Schema.org/mathExpression
	 * A mathematical expression (e.g. 'x^2-3x=0') that may be solved for a specific variable, simplified, or transformed. This can take many formats, e.g. LaTeX, Ascii-Math, or math as you would write with a keyboard.
	 *
	 * @property mathExpression
	 * @type Text
	 */
	mathExpression;

}