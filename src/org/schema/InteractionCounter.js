/**
 *  Schema.org/InteractionCounter
 *  A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.
 * 
 *  @author schema.org
 *  @class InteractionCounter
 *  @module org.schema
 *  @extends StructuredValue
 */
var InteractionCounter = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    StructuredValue.call(this);
    this.context = "http://schema.org/";
    this.type = "InteractionCounter";
};
InteractionCounter = stjs.extend(InteractionCounter, StructuredValue, [], function(constructor, prototype) {
    /**
     *  Schema.org/interactionService
     *  The WebSite or SoftwareApplication where the interactions took place.
     * 
     *  @property interactionService
     *  @type SoftwareApplication
     */
    interactionService = null;
    /**
     *  Schema.org/userInteractionCount
     *  The number of interactions for the CreativeWork using the WebSite or SoftwareApplication.
     * 
     *  @property userInteractionCount
     *  @type Integer
     */
    userInteractionCount = null;
    /**
     *  Schema.org/interactionType
     *  The Action representing the type of interaction. For up votes, +1s, etc. use [[LikeAction]]. For down votes use [[DislikeAction]]. Otherwise, use the most specific Action.
     * 
     *  @property interactionType
     *  @type Action
     */
    interactionType = null;
}, {interactionService: "SoftwareApplication", interactionType: "Action", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
