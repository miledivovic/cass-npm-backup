/**
 *  Schema.org/FilmAction
 *  The act of capturing sound and moving images on film, video, or digitally.
 * 
 *  @author schema.org
 *  @class FilmAction
 *  @module org.schema
 *  @extends CreateAction
 */
var FilmAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "FilmAction";
};
FilmAction = stjs.extend(FilmAction, CreateAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
