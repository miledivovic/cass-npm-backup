/**
 *  www.w3.org/2004/02/skos/core/Collection
 *  A meaningful collection of concepts.
 *  Labelled collections can be used where you would like a set of concepts to be displayed under a 'node label' in the hierarchy.
 *  @author w3.org
 *  @class Collection
 *  @module org.w3.skos
 */
module.exports = class Collection extends EcRemoteLinkedData {
	/**
	 *  Constructor, automatically sets @context and @type.
	 *  @constructor
	 */
	constructor() {
		super("https://schema.cassproject.org/0.4/skos/", "Collection");
	}
	/**
	 *  www.w3.org/2004/02/skos/core/member
	 *  Relates a collection to one of its members.
	 *  @property member
	 *  @type N0e403dc85fe548d1b3d2f3d1ded36d20
	 */
	member = null;
};
