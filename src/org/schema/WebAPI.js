const schema = {};
schema.Service = require("./Service.js");
/**
 * Schema.org/WebAPI
 * An application programming interface accessible over Web/Internet technologies.
 *
 * @author schema.org
 * @class WebAPI
 * @module org.schema
 * @extends Service
 */
module.exports = class WebAPI extends schema.Service {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WebAPI");
	}

	/**
	 * Schema.org/documentation
	 * Further documentation describing the Web API in more detail.
	 *
	 * @property documentation
	 * @type URL
	 */
	documentation;

}