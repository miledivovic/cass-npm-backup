/**
 * Schema.org/ListItem
 * An list item, e.g. a step in a checklist or how-to description.
 *
 * @author schema.org
 * @class ListItem
 * @module org.schema
 */
module.exports = class ListItem extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ListItem");
	}
};
