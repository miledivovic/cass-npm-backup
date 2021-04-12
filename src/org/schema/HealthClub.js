/**
 * Schema.org/HealthClub
 * A health club.
 *
 * @author schema.org
 * @class HealthClub
 * @module org.schema
 * @extends HealthAndBeautyBusiness
 */
public class HealthClub extends schema.HealthAndBeautyBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HealthClub";
	}

}