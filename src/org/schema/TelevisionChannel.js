/**
 *  Schema.org/TelevisionChannel
 *  A unique instance of a television BroadcastService on a CableOrSatelliteService lineup.
 * 
 *  @author schema.org
 *  @class TelevisionChannel
 *  @module org.schema
 *  @extends BroadcastChannel
 */
var TelevisionChannel = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    BroadcastChannel.call(this);
    this.context = "http://schema.org/";
    this.type = "TelevisionChannel";
};
TelevisionChannel = stjs.extend(TelevisionChannel, BroadcastChannel, [], null, {inBroadcastLineup: "CableOrSatelliteService", providesBroadcastService: "BroadcastService", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
