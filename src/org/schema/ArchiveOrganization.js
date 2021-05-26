const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/ArchiveOrganization
 * An organization with archival holdings. An organization which keeps and preserves archival material and typically makes it accessible to the public.
 *
 * @author schema.org
 * @class ArchiveOrganization
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class ArchiveOrganization extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ArchiveOrganization");
	}

	/**
	 * Schema.org/archiveHeld
	 * Collection, [fonds](https://en.wikipedia.org/wiki/Fonds), or item held, kept or maintained by an [[ArchiveOrganization]].
	 *
	 * @property archiveHeld
	 * @type ArchiveComponent
	 */
	archiveHeld;

}