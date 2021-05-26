const schema = {};
schema.Place = require("./Place.js");
/**
 * Schema.org/Landform
 * A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins.
 *
 * @author schema.org
 * @class Landform
 * @module org.schema
 * @extends Place
 */
module.exports = class Landform extends schema.Place {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Landform");
	}

}