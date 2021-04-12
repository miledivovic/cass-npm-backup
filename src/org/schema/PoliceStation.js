/**
 * Schema.org/PoliceStation
 * A police station.
 *
 * @author schema.org
 * @class PoliceStation
 * @module org.schema
 * @extends CivicStructure
 */
public class PoliceStation extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PoliceStation";
	}

}