/**
 *  Schema.org/BookmarkAction
 *  An agent bookmarks/flags/labels/tags/marks an object.
 * 
 *  @author schema.org
 *  @class BookmarkAction
 *  @module org.schema
 *  @extends OrganizeAction
 */
var BookmarkAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    OrganizeAction.call(this);
    this.context = "http://schema.org/";
    this.type = "BookmarkAction";
};
BookmarkAction = stjs.extend(BookmarkAction, OrganizeAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
