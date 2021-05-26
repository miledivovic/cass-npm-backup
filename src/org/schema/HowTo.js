const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/HowTo
 * Instructions that explain how to achieve a result by performing a sequence of steps.
 *
 * @author schema.org
 * @class HowTo
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class HowTo extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HowTo");
	}

	/**
	 * Schema.org/supply
	 * A sub-property of instrument. A supply consumed when performing instructions or a direction.
	 *
	 * @property supply
	 * @type Text
	 */
	supply;

	/**
	 * Schema.org/step
	 * A single step item (as HowToStep, text, document, video, etc.) or a HowToSection.
	 *
	 * @property step
	 * @type Text
	 */
	step;

	/**
	 * Schema.org/performTime
	 * The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
	 *
	 * @property performTime
	 * @type Duration
	 */
	performTime;

	/**
	 * Schema.org/estimatedCost
	 * The estimated cost of the supply or supplies consumed when performing instructions.
	 *
	 * @property estimatedCost
	 * @type Text
	 */
	estimatedCost;

	/**
	 * Schema.org/yield
	 * The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles.
	 *
	 * @property yield
	 * @type QuantitativeValue
	 */
	yield;

	/**
	 * Schema.org/totalTime
	 * The total time required to perform instructions or a direction (including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
	 *
	 * @property totalTime
	 * @type Duration
	 */
	totalTime;

	/**
	 * Schema.org/steps
	 * A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).
	 *
	 * @property steps
	 * @type ItemList
	 */
	steps;

	/**
	 * Schema.org/tool
	 * A sub property of instrument. An object used (but not consumed) when performing instructions or a direction.
	 *
	 * @property tool
	 * @type HowToTool
	 */
	tool;

	/**
	 * Schema.org/prepTime
	 * The length of time it takes to prepare the items to be used in instructions or a direction, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
	 *
	 * @property prepTime
	 * @type Duration
	 */
	prepTime;

}