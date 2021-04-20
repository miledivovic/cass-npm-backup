/**
 * Schema.org/GovernmentBuilding
 * A government building.
 *
 * @author schema.org
 * @class GovernmentBuilding
 * @module org.schema
 */
module.exports = class GovernmentBuilding extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GovernmentBuilding");
	}

}