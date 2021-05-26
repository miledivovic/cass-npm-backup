const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Book
 * A book.
 *
 * @author schema.org
 * @class Book
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Book extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Book");
	}

	/**
	 * Schema.org/numberOfPages
	 * The number of pages in the book.
	 *
	 * @property numberOfPages
	 * @type Integer
	 */
	numberOfPages;

	/**
	 * Schema.org/bookEdition
	 * The edition of the book.
	 *
	 * @property bookEdition
	 * @type Text
	 */
	bookEdition;

	/**
	 * Schema.org/bookFormat
	 * The format of the book.
	 *
	 * @property bookFormat
	 * @type BookFormatType
	 */
	bookFormat;

	/**
	 * Schema.org/abridged
	 * Indicates whether the book is an abridged edition.
	 *
	 * @property abridged
	 * @type Boolean
	 */
	abridged;

	/**
	 * Schema.org/illustrator
	 * The illustrator of the book.
	 *
	 * @property illustrator
	 * @type Person
	 */
	illustrator;

	/**
	 * Schema.org/isbn
	 * The ISBN of the book.
	 *
	 * @property isbn
	 * @type Text
	 */
	isbn;

}