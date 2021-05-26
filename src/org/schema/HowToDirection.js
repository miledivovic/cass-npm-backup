const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/HowToDirection
 * A direction indicating a single action to do in the instructions for how to achieve a result.
 *
 * @author schema.org
 * @class HowToDirection
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class HowToDirection extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HowToDirection");
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
	 * Schema.org/afterMedia
	 * A media object representing the circumstances after performing this direction.
	 *
	 * @property afterMedia
	 * @type URL
	 */
	afterMedia;

	/**
	 * Schema.org/beforeMedia
	 * A media object representing the circumstances before performing this direction.
	 *
	 * @property beforeMedia
	 * @type URL
	 */
	beforeMedia;

	/**
	 * Schema.org/performTime
	 * The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
	 *
	 * @property performTime
	 * @type Duration
	 */
	performTime;

	/**
	 * Schema.org/totalTime
	 * The total time required to perform instructions or a direction (including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
	 *
	 * @property totalTime
	 * @type Duration
	 */
	totalTime;

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

	/**
	 * Schema.org/duringMedia
	 * A media object representing the circumstances while performing this direction.
	 *
	 * @property duringMedia
	 * @type MediaObject
	 */
	duringMedia;

}