/**
 * Schema.org/PhysicalActivity
 * Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan.
 *
 * @author schema.org
 * @class PhysicalActivity
 * @module org.schema
 */
public class PhysicalActivity extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PhysicalActivity";
	}

}