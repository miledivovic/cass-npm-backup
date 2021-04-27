global.schema.CreativeWorkSeries = require("./CreativeWorkSeries.js");
/**
 * Schema.org/TVSeries
 * CreativeWorkSeries dedicated to TV broadcast and associated online delivery.
 *
 * @author schema.org
 * @class TVSeries
 * @module org.schema
 * @extends CreativeWorkSeries
 */
module.exports = class TVSeries extends schema.CreativeWorkSeries {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "TVSeries");
	}
};
