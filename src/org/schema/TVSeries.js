/**
 * Schema.org/TVSeries
 * CreativeWorkSeries dedicated to TV broadcast and associated online delivery.
 *
 * @author schema.org
 * @class TVSeries
 * @module org.schema
 * @extends CreativeWorkSeries
 */
public class TVSeries extends schema.CreativeWorkSeries {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TVSeries";
	}

}