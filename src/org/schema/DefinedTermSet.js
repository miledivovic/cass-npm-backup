/**
 * Schema.org/DefinedTermSet
 * A set of defined terms for example a set of categories or a classification scheme, a glossary, dictionary or enumeration.
 *
 * @author schema.org
 * @class DefinedTermSet
 * @module org.schema
 */
module.exports = class DefinedTermSet extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DefinedTermSet");
	}

}