/**
 *  Schema.org/BookFormatType
 *  The publication format of the book.
 * 
 *  @author schema.org
 *  @class BookFormatType
 *  @module org.schema
 *  @extends Enumeration
 */
var BookFormatType = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "BookFormatType";
};
BookFormatType = stjs.extend(BookFormatType, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
