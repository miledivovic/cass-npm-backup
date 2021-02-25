/**
 *  Schema.org/ReviewAction
 *  The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review.
 * 
 *  @author schema.org
 *  @class ReviewAction
 *  @module org.schema
 *  @extends AssessAction
 */
var ReviewAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    AssessAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ReviewAction";
};
ReviewAction = stjs.extend(ReviewAction, AssessAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/resultReview
     *  A sub property of result. The review that resulted in the performing of the action.
     * 
     *  @property resultReview
     *  @type Review
     */
    prototype.resultReview = null;
}, {resultReview: "Review", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
