/**
 * Schema.org/SportingGoodsStore
 * A sporting goods store.
 *
 * @author schema.org
 * @class SportingGoodsStore
 * @module org.schema
 */
module.exports = class SportingGoodsStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "SportingGoodsStore");
	}
};
