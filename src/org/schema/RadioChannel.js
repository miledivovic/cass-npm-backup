/**
 *  Schema.org/RadioChannel
 *  A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup.
 * 
 *  @author schema.org
 *  @class RadioChannel
 *  @module org.schema
 *  @extends BroadcastChannel
 */
var RadioChannel = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    BroadcastChannel.call(this);
    this.context = "http://schema.org/";
    this.type = "RadioChannel";
};
RadioChannel = stjs.extend(RadioChannel, BroadcastChannel, [], null, {inBroadcastLineup: "CableOrSatelliteService", providesBroadcastService: "BroadcastService", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
