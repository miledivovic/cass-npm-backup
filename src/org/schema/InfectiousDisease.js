const schema = {};
schema.MedicalCondition = require("./MedicalCondition.js");
/**
 * Schema.org/InfectiousDisease
 * An infectious disease is a clinically evident human disease resulting from the presence of pathogenic microbial agents, like pathogenic viruses, pathogenic bacteria, fungi, protozoa, multicellular parasites, and prions. To be considered an infectious disease, such pathogens are known to be able to cause this disease.
 *
 * @author schema.org
 * @class InfectiousDisease
 * @module org.schema
 * @extends MedicalCondition
 */
module.exports = class InfectiousDisease extends schema.MedicalCondition {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InfectiousDisease");
	}

	/**
	 * Schema.org/transmissionMethod
	 * How the disease spreads, either as a route or vector, for example 'direct contact', 'Aedes aegypti', etc.
	 *
	 * @property transmissionMethod
	 * @type Text
	 */
	transmissionMethod;

	/**
	 * Schema.org/infectiousAgentClass
	 * The class of infectious agent (bacteria, prion, etc.) that causes the disease.
	 *
	 * @property infectiousAgentClass
	 * @type InfectiousAgentClass
	 */
	infectiousAgentClass;

	/**
	 * Schema.org/infectiousAgent
	 * The actual infectious agent, such as a specific bacterium.
	 *
	 * @property infectiousAgent
	 * @type Text
	 */
	infectiousAgent;

}