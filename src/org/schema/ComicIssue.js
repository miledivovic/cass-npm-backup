/**
 * Schema.org/ComicIssue
 * Individual comic issues are serially published as
		part of a larger series. For the sake of consistency, even one-shot issues
		belong to a series comprised of a single issue. All comic issues can be
		uniquely identified by: the combination of the name and volume number of the
		series to which the issue belongs; the issue number; and the variant
		description of the issue (if any).
 *
 * @author schema.org
 * @class ComicIssue
 * @module org.schema
 */
module.exports = class ComicIssue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ComicIssue");
	}
};
