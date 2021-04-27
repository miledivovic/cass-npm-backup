/**
 * Schema.org/OpeningHoursSpecification
 * A structured value providing information about the opening hours of a place or a certain service inside a place.\n\n
The place is __open__ if the [[opens]] property is specified, and __closed__ otherwise.\n\nIf the value for the [[closes]] property is less than the value for the [[opens]] property then the hour range is assumed to span over the next day.

 *
 * @author schema.org
 * @class OpeningHoursSpecification
 * @module org.schema
 */
module.exports = class OpeningHoursSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.org/",
			"OpeningHoursSpecification"
		);
	}
};
