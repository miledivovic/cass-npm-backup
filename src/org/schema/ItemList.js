/**
 *  Schema.org/ItemList
 *  A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.
 * 
 *  @author schema.org
 *  @class ItemList
 *  @module org.schema
 *  @extends Intangible
 */
var ItemList = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "ItemList";
};
ItemList = stjs.extend(ItemList, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/itemListElement
     *  For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.\n\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\n\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.
     * 
     *  @property itemListElement
     *  @type ListItem
     */
    prototype.itemListElement = null;
    /**
     *  Schema.org/itemListOrder
     *  Type of ordering (e.g. Ascending, Descending, Unordered).
     * 
     *  @property itemListOrder
     *  @type Text
     */
    prototype.itemListOrder = null;
    /**
     *  Schema.org/numberOfItems
     *  The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.
     * 
     *  @property numberOfItems
     *  @type Integer
     */
    prototype.numberOfItems = null;
}, {itemListElement: "ListItem", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
