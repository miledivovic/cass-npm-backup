/**
 * Schema.org/Chapter
 * One of the sections into which a book is divided. A chapter usually has a section number or a name.
 *
 * @author schema.org
 * @class Chapter
 * @module org.schema
 */
public class Chapter extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Chapter";
	}

}