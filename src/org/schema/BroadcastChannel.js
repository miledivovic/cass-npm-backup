/**
 *  Schema.org/BroadcastChannel
 *  A unique instance of a BroadcastService on a CableOrSatelliteService lineup.
 * 
 *  @author schema.org
 *  @class BroadcastChannel
 *  @module org.schema
 *  @extends Intangible
 */
var BroadcastChannel = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "BroadcastChannel";
};
BroadcastChannel = stjs.extend(BroadcastChannel, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/broadcastChannelId
     *  The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number.
     * 
     *  @property broadcastChannelId
     *  @type Text
     */
    prototype.broadcastChannelId = null;
    /**
     *  Schema.org/broadcastServiceTier
     *  The type of service required to have access to the channel (e.g. Standard or Premium).
     * 
     *  @property broadcastServiceTier
     *  @type Text
     */
    prototype.broadcastServiceTier = null;
    /**
     *  Schema.org/inBroadcastLineup
     *  The CableOrSatelliteService offering the channel.
     * 
     *  @property inBroadcastLineup
     *  @type CableOrSatelliteService
     */
    prototype.inBroadcastLineup = null;
    /**
     *  Schema.org/providesBroadcastService
     *  The BroadcastService offered on this channel.
     * 
     *  @property providesBroadcastService
     *  @type BroadcastService
     */
    prototype.providesBroadcastService = null;
    /**
     *  Schema.org/genre
     *  Genre of the creative work, broadcast channel or group.
     * 
     *  @property genre
     *  @type URL
     */
    prototype.genre = null;
}, {inBroadcastLineup: "CableOrSatelliteService", providesBroadcastService: "BroadcastService", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
