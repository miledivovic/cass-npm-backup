const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Observation
 * Instances of the class [[Observation]] are used to specify observations about an entity (which may or may not be an instance of a [[StatisticalPopulation]]), at a particular time. The principal properties of an [[Observation]] are [[observedNode]], [[measuredProperty]], [[measuredValue]] (or [[median]], etc.) and [[observationDate]] ([[measuredProperty]] properties can, but need not always, be W3C RDF Data Cube "measure properties", as in the [lifeExpectancy example](https://www.w3.org/TR/vocab-data-cube/#dsd-example)).
See also [[StatisticalPopulation]], and the [data and datasets](/docs/data-and-datasets.html) overview for more details.
  
 *
 * @author schema.org
 * @class Observation
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Observation extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Observation");
	}

	/**
	 * Schema.org/marginOfError
	 * A marginOfError for an [[Observation]].
	 *
	 * @property marginOfError
	 * @type QuantitativeValue
	 */
	marginOfError;

	/**
	 * Schema.org/observedNode
	 * The observedNode of an [[Observation]], often a [[StatisticalPopulation]].
	 *
	 * @property observedNode
	 * @type StatisticalPopulation
	 */
	observedNode;

	/**
	 * Schema.org/measuredProperty
	 * The measuredProperty of an [[Observation]], either a schema.org property, a property from other RDF-compatible systems e.g. W3C RDF Data Cube, or schema.org extensions such as [GS1's](https://www.gs1.org/voc/?show=properties).
	 *
	 * @property measuredProperty
	 * @type Property
	 */
	measuredProperty;

	/**
	 * Schema.org/observationDate
	 * The observationDate of an [[Observation]].
	 *
	 * @property observationDate
	 * @type DateTime
	 */
	observationDate;

	/**
	 * Schema.org/measuredValue
	 * The measuredValue of an [[Observation]].
	 *
	 * @property measuredValue
	 * @type DataType
	 */
	measuredValue;

}