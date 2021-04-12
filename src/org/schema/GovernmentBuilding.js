/**
 * Schema.org/GovernmentBuilding
 * A government building.
 *
 * @author schema.org
 * @class GovernmentBuilding
 * @module org.schema
 */
public class GovernmentBuilding extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "GovernmentBuilding";
	}

}