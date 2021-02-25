/**
 *  Schema.org/DataFeedItem
 *  A single item within a larger data feed.
 * 
 *  @author schema.org
 *  @class DataFeedItem
 *  @module org.schema
 *  @extends Intangible
 */
var DataFeedItem = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "DataFeedItem";
};
DataFeedItem = stjs.extend(DataFeedItem, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/dateModified
     *  The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.
     * 
     *  @property dateModified
     *  @type DateTime
     */
    prototype.dateModified = null;
    /**
     *  Schema.org/dateDeleted
     *  The datetime the item was removed from the DataFeed.
     * 
     *  @property dateDeleted
     *  @type DateTime
     */
    prototype.dateDeleted = null;
    /**
     *  Schema.org/dateCreated
     *  The date on which the CreativeWork was created or the item was added to a DataFeed.
     * 
     *  @property dateCreated
     *  @type Date
     */
    prototype.dateCreated = null;
    /**
     *  Schema.org/item
     *  An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’.
     * 
     *  @property item
     *  @type Thing
     */
    prototype.item = null;
}, {item: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
