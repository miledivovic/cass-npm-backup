/**
 * Schema.org/Series
 * A Series in schema.org is a group of related items, typically but not necessarily of the same kind. See also [[CreativeWorkSeries]], [[EventSeries]].
 *
 * @author schema.org
 * @class Series
 * @module org.schema
 */
public class Series extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Series";
	}

}