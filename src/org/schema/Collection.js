const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Collection
 * A collection of items e.g. creative works or products.
 *
 * @author schema.org
 * @class Collection
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Collection extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Collection");
	}

	/**
	 * Schema.org/collectionSize
	 * The number of items in the [[Collection]].
	 *
	 * @property collectionSize
	 * @type Integer
	 */
	collectionSize;

}