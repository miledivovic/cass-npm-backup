/**
 *  Schema.org/GamePlayMode
 *  Indicates whether this game is multi-player, co-op or single-player.
 * 
 *  @author schema.org
 *  @class GamePlayMode
 *  @module org.schema
 *  @extends Enumeration
 */
var GamePlayMode = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "GamePlayMode";
};
GamePlayMode = stjs.extend(GamePlayMode, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
