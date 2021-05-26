const schema = {};
schema.AnatomicalStructure = require("./AnatomicalStructure.js");
/**
 * Schema.org/Muscle
 * A muscle is an anatomical structure consisting of a contractile form of tissue that animals use to effect movement.
 *
 * @author schema.org
 * @class Muscle
 * @module org.schema
 * @extends AnatomicalStructure
 */
module.exports = class Muscle extends schema.AnatomicalStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Muscle");
	}

	/**
	 * Schema.org/nerve
	 * The underlying innervation associated with the muscle.
	 *
	 * @property nerve
	 * @type Nerve
	 */
	nerve;

	/**
	 * Schema.org/antagonist
	 * The muscle whose action counteracts the specified muscle.
	 *
	 * @property antagonist
	 * @type Muscle
	 */
	antagonist;

	/**
	 * Schema.org/muscleAction
	 * The movement the muscle generates.
	 *
	 * @property muscleAction
	 * @type Text
	 */
	muscleAction;

	/**
	 * Schema.org/bloodSupply
	 * The blood vessel that carries blood from the heart to the muscle.
	 *
	 * @property bloodSupply
	 * @type Vessel
	 */
	bloodSupply;

	/**
	 * Schema.org/insertion
	 * The place of attachment of a muscle, or what the muscle moves.
	 *
	 * @property insertion
	 * @type AnatomicalStructure
	 */
	insertion;

}