/**
 * Schema.org/BedDetails
 * An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also [[BedType]] (under development).
 *
 * @author schema.org
 * @class BedDetails
 * @module org.schema
 */
public class BedDetails extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BedDetails";
	}

}