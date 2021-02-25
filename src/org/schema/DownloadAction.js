/**
 *  Schema.org/DownloadAction
 *  The act of downloading an object.
 * 
 *  @author schema.org
 *  @class DownloadAction
 *  @module org.schema
 *  @extends TransferAction
 */
var DownloadAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    TransferAction.call(this);
    this.context = "http://schema.org/";
    this.type = "DownloadAction";
};
DownloadAction = stjs.extend(DownloadAction, TransferAction, [], null, {toLocation: "Place", fromLocation: "Place", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
