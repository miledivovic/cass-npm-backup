/**
 *  Schema.org/GameServerStatus
 *  Status of a game server.
 * 
 *  @author schema.org
 *  @class GameServerStatus
 *  @module org.schema
 *  @extends Enumeration
 */
var GameServerStatus = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "GameServerStatus";
};
GameServerStatus = stjs.extend(GameServerStatus, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
