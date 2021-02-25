/**
 *  Schema.org/ListItem
 *  An list item, e.g. a step in a checklist or how-to description.
 * 
 *  @author schema.org
 *  @class ListItem
 *  @module org.schema
 *  @extends Intangible
 */
var ListItem = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "ListItem";
};
ListItem = stjs.extend(ListItem, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/nextItem
     *  A link to the ListItem that follows the current one.
     * 
     *  @property nextItem
     *  @type ListItem
     */
    prototype.nextItem = null;
    /**
     *  Schema.org/position
     *  The position of an item in a series or sequence of items.
     * 
     *  @property position
     *  @type Integer
     */
    prototype.position = null;
    /**
     *  Schema.org/previousItem
     *  A link to the ListItem that preceeds the current one.
     * 
     *  @property previousItem
     *  @type ListItem
     */
    prototype.previousItem = null;
    /**
     *  Schema.org/item
     *  An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’.
     * 
     *  @property item
     *  @type Thing
     */
    prototype.item = null;
}, {nextItem: "ListItem", previousItem: "ListItem", item: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
